import axios from "axios";
import { ILoginData, IRegisterData } from "../Types/types";

const instance = axios.create({
  baseURL: "http://localhost:5001/api",
});

export const getUser = async () => {
  const response = await instance.get("/users/profile", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  });
  return response.data;
};

export const getAllUsersWithChatData = async () => {
  const response = await instance.get("/users/allWithChatData", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  });
  return response.data;
};

export const loginMutation = async (loginData: ILoginData) => {
  const response = await instance.post("/users/login", loginData);
  return response.data;
};

export const registerMutation = async (registerData: IRegisterData) => {
  const response = await instance.post("/users/register", registerData);
  return response.data;
};

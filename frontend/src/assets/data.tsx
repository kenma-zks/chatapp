import { IUserData } from "../Types/types";

export const dummyData: IUserData[] = [
  {
    _id: 1,
    username: "jessica drew",
    email: "jessica@gmail.com",
    chatData: [
      {
        id: 1,
        username: "Jessica Drew",
        Time: "19:48",
        Date: new Date("2023-09-18"),
        Image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
        lastOnline: "last seen 30 mins ago",
        messages: [
          {
            type: "incoming",
            time: "18:42",
            text: "OMG 😲 do you remember what you did last night at the work night out?",
          },
          {
            type: "outgoing",
            time: "18:43",
            text: "no haha",
          },
          {
            type: "outgoing",
            time: "18:44",
            text: "Ok, See you later",
          },
          {
            type: "incoming",
            time: "18:45",
            text: "Okkk",
          },
        ],
      },
    ],
  },
  {
    _id: 2,
    username: "john doe",
    email: "john@gmail.com",
    chatData: [
      {
        id: 2,
        username: "John Doe",
        Time: "",
        Date: new Date(""),
        Image: "",
        lastOnline: "",
        messages: [],
      },
    ],
  },
];

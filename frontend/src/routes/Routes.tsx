import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import RequireAuth from "./RequireAuth";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <RequireAuth element={<Home />} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import Registation from "../pages/registation/Registation";
import LogIn from "../pages/home/login/LogIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Registation />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ],
  },
]);

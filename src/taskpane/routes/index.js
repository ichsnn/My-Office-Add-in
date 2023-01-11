import React from "react";
import { useRouter } from "../contexts/RouterContext";
import Home from "../pages/home";
import Login from "../pages/login";
import Error404 from "../pages/error404";

export const Routes = () => {
  const { path } = useRouter();
  switch (path) {
    case "/":
      return <Home />;
    case "/login":
      return <Login />;
    default:
      return <Error404 />;
  }
};

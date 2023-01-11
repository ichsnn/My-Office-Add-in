import React from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";
import Progress from "./components/Progress";
import { Routes } from "./routes";
import { Link } from "./contexts/RouterContext";

/* global require */

const App = ({ title, isOfficeInitialized }) => {
  if (!isOfficeInitialized) {
    return (
      <Progress
        title={title}
        logo={require("./../../assets/logo-filled.png")}
        message="Please sideload your addin to see app body."
      />
    );
  }

  return (
    <div className="ms-welcome">
      <ul style={{ display: "flex", gap: "8px", listStyle: "none" }}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
      <Header logo={require("./../../assets/logo-filled.png")} title={title} message="Welcome" />
      {/* Routes : Please provide RouterProvider before */}
      <Routes />
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string,
  isOfficeInitialized: PropTypes.bool,
};

export default App;

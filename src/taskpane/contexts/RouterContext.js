import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const RouterContext = createContext({
  path: "/",
  setPath: () => {},
});

export const RouterProvider = ({ children }) => {
  const [path, setPath] = useState("/");
  return <RouterContext.Provider value={{ path, setPath }}>{children}</RouterContext.Provider>;
};
RouterProvider.propTypes = {
  children: PropTypes.node,
};

export const useRouter = () => useContext(RouterContext);

export const Link = ({ to, children }) => {
  const { setPath } = useRouter();
  function click(e) {
    e.preventDefault();
    setPath(to);
  }
  return (
    <a href={to} onClick={click}>
      {children}
    </a>
  );
};
Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};

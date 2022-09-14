import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/dashboard", element: <Dashboard /> },
    // ...
  ]);
  return routes;
};


const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;

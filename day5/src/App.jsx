import React, { useState } from "react";
import DashBoard from "./components/Dashboard";
import Login from "./components/Login";
import FailLogin from "./components/FailLogin";
import "./index.css";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isFailLogin, setIsFailLogin] = useState(false);

  return (
    <>
      <h1>Welcome to React Vite Micro App!</h1>
      {isLogin === true ? <Login setIsLogin={setIsLogin} /> : null}
      {/* if (isLogin === true) {<Login setIsLogin={setIsLogin}} else {null} */}
      {isLogin === false ? <DashBoard /> : null}
      {/* {isFailLogin === true ? <FailLogin  /> : null} */}
    </>
  );
}

export default App;

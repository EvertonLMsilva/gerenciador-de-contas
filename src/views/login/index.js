import React, { useState } from "react";
import "./style.scss";

const Login = () => {
  return (
    <section className="section-login">
      <h1 className="header-login">Login</h1>
      <div className="main-login">
        <input type="text" name="login" className="input01-login" />
        <input type="password" name="senha" className="input01-login"/>
      </div>
    </section>
  );
};
export default Login;

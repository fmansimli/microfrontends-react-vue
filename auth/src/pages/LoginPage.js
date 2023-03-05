import React from "react";
import { NavLink } from "react-router-dom";

import LoginForm from "../components/form/LoginForm";

function LoginPage() {
  return (
    <div>
      <div>
        <LoginForm />
        <br />
        <NavLink to="/register">don't have any account? sign up</NavLink>
        <br /> <br /> 
        <NavLink to="/forgot-password">forgot you password? reset</NavLink>
      </div>
    </div>
  );
}

export default LoginPage;

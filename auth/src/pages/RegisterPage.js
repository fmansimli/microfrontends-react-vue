import React from "react";
import { NavLink } from "react-router-dom";

import RegisterForm from "../components/form/RegisterForm";

function RegisterPage() {
  return (
    <div>
      <div>
        <NavLink to="/login">back to sign in</NavLink>
        <br />
        <br />
        <br />
        <br />
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;

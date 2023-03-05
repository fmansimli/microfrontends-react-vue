import React from "react";
import { NavLink } from "react-router-dom";

function ForgotPasswordPage() {
  return (
    <div>
      <NavLink to="/login">back to sign in</NavLink>
      <br />
      <br />
      <br />
      <div>
        <label htmlFor="email">email:</label>
        <input id="email" type="text" />
      </div>
      <br />
      <button>reset</button>
    </div>
  );
}

export default ForgotPasswordPage;

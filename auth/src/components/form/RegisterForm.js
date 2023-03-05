import React from "react";

function RegisterForm() {
  return (
    <div>
      <div>
        <label htmlFor="email">email:</label>
        <input id="email" type="text" />
      </div>
      <br />
      <div>
        <label htmlFor="password">password:</label>
        <input id="password" type="password" />
      </div>
      <br />
      <button>register</button>
    </div>
  );
}

export default RegisterForm;

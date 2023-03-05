import React from "react";

function LoginForm() {
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
      <button>login</button>
    </div>
  );
}

export default LoginForm;

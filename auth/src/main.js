import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

export const mount = (element) => {
  ReactDOM.createRoot(element).render(<App />);
};

if (process.env.NODE_ENV === "development") {
  const authRoot = document.getElementById("auth-root-dev");
  if (authRoot) {
    mount(authRoot);
  }
}

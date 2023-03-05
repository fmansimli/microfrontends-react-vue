import React from "react";

import Navbar from "./components/_common/Navbar";

import AuthModule from "./modules/AuthModule";

function App() {
  return (
    <div>
      <Navbar />
      <AuthModule />
    </div>
  );
}

export default App;

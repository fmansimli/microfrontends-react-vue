import React, { useRef, useEffect } from "react";

import { mount } from "auth/core";

function AuthModule() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
}

export default AuthModule;

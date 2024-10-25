import React from "react";
import Input from "./Input";

function Login() {
  return (
    <form className="form">
      <Input typeInput="text" placeHolder="Username" />
      <Input typeInput="password" placeHolder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;

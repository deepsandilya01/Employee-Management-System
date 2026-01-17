import React from "react";
import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    console.log("Email is ", email);
    console.log("Password is ", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20 m-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <input
            id="deep"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
            type="text"
            placeholder="Enter Your Email.."
          />
          <input
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
            autoComplete="current-password"
          />
          <button className="mt-6 w-67.5 py-3 text-lg bg-emerald-600 text-white rounded-full">
            Log in
          </button>
          ś
        </form>
      </div>
    </div>
  );
};

export default Login;

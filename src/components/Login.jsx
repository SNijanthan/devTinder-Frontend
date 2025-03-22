import axios from "axios";
import React from "react";
import { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setError("");
      const res = await axios.post(
        "http://localhost:7000/login",
        { emailId, password },
        { withCredentials: true }
      );

      console.log(res);
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      }
    }
  };
  return (
    <div className="w-2/6 m-auto bg-gray-300  p-5 flex  flex-col justify-center rounded-box">
      <fieldset className="fieldset w-full p-4 rounded-box">
        <legend className="fieldset-legend text-center text-3xl font-light">
          Log In
        </legend>
        <label className="fieldset-label">Email</label>
        <input
          type="email"
          className="input w-full my-3 py-6 focus:outline-none"
          placeholder="Email"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
        />
        <label className="fieldset-label">Password</label>
        <input
          type="text"
          className="input w-full my-3 py-6 focus:outline-none"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-600">{error}</p>}
        <button className="btn bg-green-600 mt-2 py-6" onClick={handleLogin}>
          Login
        </button>
      </fieldset>
      <div className="px-5 py-2">
        <p>
          New user ?{" "}
          <a
            to="/signup"
            className="text-sky-600 hover:underline hover:underline-offset-5 hover:cursor-pointer"
          >
            Signup
          </a>{" "}
          here
        </p>
      </div>
    </div>
  );
};

export default Login;

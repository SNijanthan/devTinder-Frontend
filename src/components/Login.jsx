import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="sm:w-1/6 text-xl md:w-3/6 md:mt-20 lg:w-2/6 sm:m-auto md:p-5 bg-gray-300  rounded-box">
      <fieldset className="fieldset w-full p-4 rounded-box">
        <legend className="fieldset-legend text-center font-light text-xl md:text-2xl lg:text-3xl">
          Log In
        </legend>
        <label className="fieldset-label text-sm md:text-base lg:text-lg">
          Email
        </label>
        <input
          type="email"
          className="input w-full my-3 py-6 focus:outline-none text-sm md:text-base"
          placeholder="Email"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
        />
        <label className="fieldset-label text-sm md:text-base lg:text-lg">
          Password
        </label>
        <input
          type="text"
          className="input w-full my-3 py-6 focus:outline-none text-sm md:text-base"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-600">{error}</p>}
        <button className="btn bg-green-600 mt-2 py-6" onClick={handleLogin}>
          Login
        </button>
        <div className="px-5 py-2">
          <p>
            New user ?{" "}
            <Link
              to="/signup"
              className="text-sky-600 hover:underline hover:underline-offset-5 hover:cursor-pointer"
            >
              Signup
            </Link>{" "}
            here
          </p>
        </div>
      </fieldset>
    </div>
  );
};

export default Login;

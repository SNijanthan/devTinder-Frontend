import React from "react";

const Signup = () => {
  return (
    <div className="w-2/6 m-auto bg-gray-300 -mt-8 p-3 flex  flex-col justify-center rounded-box">
      <fieldset className="fieldset w-full p-4 rounded-box">
        <legend className="fieldset-legend text-center text-3xl font-light">
          Sign Up
        </legend>
        <label className="fieldset-label">First Name</label>
        <input
          type="text"
          className="input w-full my-1 py-2 placeholder:text-[12px] focus:outline-none "
          placeholder="First Name"
        />
        <label className="fieldset-label">Last Name</label>
        <input
          type="text"
          className="input w-full my-1 py-2 placeholder:text-[12px] focus:outline-none"
          placeholder="Last Name"
        />
        <label className="fieldset-label">Email</label>
        <input
          type="email"
          className="input w-full my-1 py-2 placeholder:text-[12px] focus:outline-none"
          placeholder="Email"
        />
        <label className="fieldset-label">Password</label>
        <input
          type="text"
          className="input w-full my-1 py-2 placeholder:text-[12px] focus:outline-none"
          placeholder="Password"
        />
        <label className="fieldset-label">Age</label>
        <input
          type="number"
          className="input w-full my-1 py-2 placeholder:text-[12px] focus:outline-none"
          placeholder="Age"
        />
        <button className="btn bg-green-600 mt-2 py-2">Sign Up</button>
      </fieldset>
    </div>
  );
};

export default Signup;

import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState("");
  const [error, setError] = useState("");
  const [toster, setToster] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const res = await axios.post(BASE_URL + "/signup", {
        firstName,
        lastName,
        emailId,
        password,
        age,
        gender,
        photoUrl,
        about,
        skills,
      });
      setToster(true);
      if (res.status === 201) {
        setTimeout(() => {
          setToster(false);
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      setError(error?.response?.data);
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center mt-2">
        <div className="text-xl w-3/6 m-auto p-3 bg-gray-300  rounded-box">
          <fieldset className="fieldset rounded-box">
            <legend className="fieldset-legend text-center font-light text-xl md:text-2xl lg:text-3xl">
              Sign Up
            </legend>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
              <div className="flex flex-col">
                <label className="fieldset-label text-sm md:text-base mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="input w-full focus:outline-none text-sm md:text-base"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="fieldset-label text-sm md:text-base mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="input w-full focus:outline-none text-sm md:text-base"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="fieldset-label text-sm md:text-base mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="input w-full focus:outline-none text-sm md:text-base"
                  placeholder="Email"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="fieldset-label text-sm md:text-base mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="input w-full focus:outline-none text-sm md:text-base"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="fieldset-label text-sm md:text-base mb-2">
                  Age
                </label>
                <input
                  type="number"
                  className="input w-full focus:outline-none text-sm md:text-base"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="fieldset-label text-sm md:text-base mb-2">
                  Gender
                </label>
                <input
                  type="text"
                  className="input w-full focus:outline-none text-sm md:text-base"
                  placeholder="Gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full">
              <label className="fieldset-label text-sm md:text-base mb-2">
                Image URL
              </label>
              <input
                type="url"
                className="input w-full  focus:outline-none text-sm md:text-base"
                placeholder="Image URL"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label className="fieldset-label text-sm md:text-base mb-2">
                About
              </label>
              <textarea
                rows="3"
                className="textarea w-full  focus:outline-none text-sm md:text-base"
                placeholder="About"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="fieldset-label text-sm md:text-base mb-2">
                Skills
              </label>
              <input
                type="text"
                className="input w-full  focus:outline-none text-sm md:text-base mb-3"
                placeholder="Skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </div>
            {error && <p className="text-red-600 my-2">{error}</p>}
            <button
              className="btn bg-green-600 py-3 w-full text-white font-semibold"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </fieldset>
        </div>
      </div>
      {toster && (
        <div className="toast toast-top">
          <div className="alert alert-info">
            <span>Sign up completed. Redirecting to Login... 📝</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;

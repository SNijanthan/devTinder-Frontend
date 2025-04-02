import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [about, setAbout] = useState(user.about);
  const [skills, setSkills] = useState(user.skills);
  const [error, setError] = useState("");
  const [toster, setToaster] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSaveProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, age, gender, photoUrl, about, skills },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.user));
      setToaster(true);

      setTimeout(() => {
        setToaster(false);
        navigate("/");
      }, 3000);
    } catch (error) {
      console.log(error);
      setError(error?.response?.data);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center mt-10">
        <div className="text-xl w-3/6 m-auto p-5 bg-gray-300 rounded-box">
          <fieldset className="fieldset rounded-box">
            <legend className="fieldset-legend text-center font-light text-xl md:text-2xl lg:text-3xl">
              EDIT PROFILE
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
            <div className="flex flex-col">
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
                className="input w-full  focus:outline-none text-sm md:text-base"
                placeholder="Skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <button
              className="btn bg-green-600 mt-5 py-3 w-full text-white font-semibold"
              onClick={handleSaveProfile}
            >
              Save Changes
            </button>
          </fieldset>
        </div>
        <UserCard
          user={{
            firstName,
            lastName,
            age,
            gender,
            photoUrl,
            about,
            skills,
          }}
        />
      </div>
      {toster && (
        <div className="toast toast-top">
          <div className="alert alert-info">
            <span>Profile Saved Successfully 📝</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;

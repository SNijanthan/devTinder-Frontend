import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const { _id, photoUrl, firstName, lastName, age, about, skills, gender } =
    user;

  const handleSendRequest = async (status, _id) => {
    try {
      await axios.post(
        BASE_URL + "/request/send" + "/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeFeed(_id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="card m-auto mt-5 shadow-2xl max-w-xl">
        <figure>
          <img
            src={photoUrl}
            alt="User-profile"
            className="rounded-xl h-80 object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            {firstName} {lastName}
          </h2>
          {age && gender && <p>{age + ", " + gender}</p>}
          {skills.length !== 0 && <p>{skills}</p>}
          {about && <p className="mb-2">{about}</p>}
          <div className="card-actions flex items-center justify-between mx-15 mb-3">
            <button
              className="btn btn-success px-8 py-5"
              onClick={() => {
                handleSendRequest("interested", _id);
              }}
            >
              Interest
            </button>
            <button
              className="btn btn-warning px-8 py-5"
              onClick={() => {
                handleSendRequest("ignored", _id);
              }}
            >
              Ignore
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;

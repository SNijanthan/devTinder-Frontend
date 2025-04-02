import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequests } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/review/connections", {
        withCredentials: true,
      });
      dispatch(addRequests(res?.data?.connectionRequests));
    } catch (error) {
      console.log(error);
    }
  };

  const handleRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      console.log(res);
      dispatch(removeRequests(_id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0)
    return (
      <h1 className="text-center text-2xl mt-10 text-red-600">
        No Requests Found..!
      </h1>
    );

  return (
    <div className="mt-5">
      <h1 className="text-4xl text-center my-3 font-light ">
        CONNECTION REQUESTS
      </h1>
      {requests.map((request) => {
        const { firstName, lastName, age, gender, photoUrl, about, skills } =
          request.fromUserId;
        return (
          <div
            key={request._id}
            className="bg-gray-200 flex items-center justify-around py-8 rounded-xl w-4/6 m-auto"
          >
            <div>
              <img
                src={photoUrl}
                alt="image"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <div className="text-center px-4 flex-1">
              <p className="my-1">{firstName + " " + lastName}</p>
              {age && gender && <p className="my-1">{age + ", " + gender}</p>}
              {about && <p className="my-1">{about}</p>}
              {skills && <p className="my-1">{skills}</p>}
            </div>
            <div className="flex">
              <button
                className="btn btn-success mx-4"
                onClick={() => {
                  handleRequest("accepted", request._id);
                }}
              >
                Accept
              </button>
              <button
                className="btn btn-info mx-4"
                onClick={() => {
                  handleRequest("rejected", request._id);
                }}
              >
                Reject
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;

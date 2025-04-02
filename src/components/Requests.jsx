import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/review/connections", {
        withCredentials: true,
      });
      console.log(res?.data?.connectionRequests);
      dispatch(addRequests(res?.data?.connectionRequests));
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
      <h1 className="text-4xl text-center my-3 font-bold text-emerald-800">
        CONNECTION REQUESTS
      </h1>
      {requests.map((request) => {
        const { firstName, lastName, age, gender, photoUrl, about, skills } =
          request.fromUserId;
        return (
          <div
            key={request._id}
            className="bg-gray-200 flex items-center justify-evenly p-8 rounded-xl w-4/6 m-auto"
          >
            <div>
              <img
                src={photoUrl}
                alt="image"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <div>
              <p className="my-1">{firstName + " " + lastName}</p>
              {age && gender && <p className="my-1">{age + ", " + gender}</p>}
              {about && <p className="my-1">{about}</p>}
              {skills && <p className="my-1">{skills}</p>}
            </div>
            <div className="flex">
              <button className="btn btn-success mx-4">Interest</button>
              <button className="btn btn-warning mx-4">Ignore</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;

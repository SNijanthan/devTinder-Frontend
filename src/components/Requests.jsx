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

  if (requests.length === 0) return <h1>No Requests Found</h1>;

  return (
    <div className="mt-5 w-1/2 m-auto">
      <h1 className="text-4xl text-center my-3 font-bold text-emerald-800">
        CONNECTION REQUESTS
      </h1>
      {requests.map((request) => {
        const { firstName, lastName, age, gender, photoUrl, about, skills } =
          request.fromUserId;
        return (
          <div
            key={request._id}
            className="bg-gray-100 flex items-center justify-around mb-5 p-3 rounded-xl"
          >
            <div>
              <img
                src={photoUrl}
                alt="image"
                className="w-20 h-20 rounded-full object-contain"
              />
            </div>
            <div>
              <p>{firstName + " " + lastName}</p>
              {age && gender && <p>{age + " " + gender}</p>}
              {about && <p>{about}</p>}
              {skills && <p>{skills}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;

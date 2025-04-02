import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connection);
  const dispatch = useDispatch();
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res?.data);
      dispatch(addConnection(res?.data?.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0) {
    return (
      <h1 className="text-center text-2xl mt-10 text-red-600">
        No Connections Found..!
      </h1>
    );
  }

  return (
    <div className="mt-5">
      <h1 className="text-4xl text-center my-3 font-light text-emerald-800">
        CONNECTIONS
      </h1>
      {connections.map((connection) => {
        const { firstName, lastName, age, gender, photoUrl, about, skills } =
          connection;
        return (
          <div
            key={connection._id}
            className="bg-gray-200 flex items-center justify-around p-8 rounded-xl w-4/6 m-auto my-5"
          >
            <div>
              <div className="bg-gray-200 rounded-full ">
                <img
                  src={photoUrl}
                  alt="image"
                  className="w-30 h-30 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="text-center px-4 flex-1">
              <p className="my-1">{firstName + " " + lastName}</p>
              {age && gender && <p className="my-1">{age + " " + gender}</p>}
              {about && <p className="my-1 w-[42rem] m-auto">{about}</p>}
              {skills && <p className="my-1">{skills}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;

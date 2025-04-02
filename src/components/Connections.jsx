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
    <div className="mt-5 w-3/6 m-auto">
      <h1 className="text-4xl text-center my-3 font-light text-emerald-800">
        CONNECTIONS
      </h1>
      {connections.map((connection) => {
        const { firstName, lastName, age, gender, photoUrl, about, skills } =
          connection;
        return (
          <div
            key={connection._id}
            className="bg-gray-100 flex items-center justify-around mb-5 p-3 rounded-xl"
          >
            <div>
              <div className="bg-gray-200 rounded-full ">
                <img
                  src={photoUrl}
                  alt="image"
                  className="w-40 h-40 rounded-full object-contain"
                />
              </div>
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

export default Connections;

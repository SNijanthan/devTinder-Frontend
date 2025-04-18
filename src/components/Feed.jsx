import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);

  const dispatch = useDispatch();

  const getFeed = async () => {
    try {
      if (feed) return;
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!feed || feed.length === 0) {
      getFeed();
    }
  }, [feed]);

  if (!feed) return;

  if (feed.length <= 0)
    return (
      <h1 className="text-center text-2xl mt-10 text-red-600">
        New Users Not Found...!
      </h1>
    );

  return (
    feed && (
      <div className="flex items-center my-10">
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;

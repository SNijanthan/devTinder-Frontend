import React from "react";

const UserCard = ({ user }) => {
  const { photoUrl, firstName, lastName, age, about, skills, gender } = user;
  return (
    <>
      <div className="card m-auto mt-5 shadow-2xl">
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
          {age && gender && <p>{age + " " + gender}</p>}
          {skills.length !== 0 && <p className="my-2">{skills}</p>}
          {about && <p>{about}</p>}
          <div className="card-actions flex items-center justify-between mx-15 mb-3">
            <button className="btn btn-success px-8 py-5">Interest</button>
            <button className="btn btn-warning px-8 py-5">Ignore</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;

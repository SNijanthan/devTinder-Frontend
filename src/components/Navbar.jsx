import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="navbar text-[#FF5A5F] bg-[#F3F4F6] shadow-sm p-5">
        <div className="flex-1">
          {user ? (
            <Link
              to="/"
              className="btn btn-ghost text-xl hover:bg-[#4C5FD5] hover:text-[#FF5A5F]"
            >
              DevTinder🔥
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-ghost text-xl hover:bg-[#4C5FD5] hover:text-[#FF5A5F]"
            >
              DevTinder🔥
            </Link>
          )}
        </div>
        <div className="flex gap-2">
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar mx-10"
              >
                <div className="w-10 rounded-full">
                  <img alt="user profile" src={user.photoUrl} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Edit Profile
                  </Link>
                </li>
                <li>
                  <p onClick={handleLogout}>Logout</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

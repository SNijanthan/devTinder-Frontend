import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  return (
    <>
      <div className="navbar text-[#FF5A5F] bg-[#F3F4F6] shadow-sm p-5">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl hover:bg-[#4C5FD5] hover:text-[#FF5A5F]">
            DevTinder🔥
          </a>
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
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Logout</a>
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

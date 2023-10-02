import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar justify-between">
      <div className="navbar-start flex-row-reverse lg:flex-row">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden relative left-44">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="text-lg font-normal">
              <NavLink
                to={`/`}
                className={({ isActive, isPending }) =>
                  isActive ? "text-red-400" : isPending ? "pending" : ""
                }
              >
                Home
              </NavLink>
            </li>
            
            <li className="text-lg font-normal">
              <NavLink
                to={`/login`}
                className={({ isActive, isPending }) =>
                  isActive ? "text-red-400" : isPending ? "pending" : ""
                }
              >
                Login
              </NavLink>
            </li>
            <li className="text-lg font-normal">
              <NavLink
                to={`/register`}
                className={({ isActive, isPending }) =>
                  isActive ? "text-red-400" : isPending ? "pending" : ""
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Logo</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-lg font-normal">
            <NavLink
              to={`/`}
              className={({ isActive, isPending }) =>
                isActive ? "text-red-400" : isPending ? "pending" : ""
              }
            >
              Home
            </NavLink>
          </li>
          
          <li className="text-lg font-normal">
            <NavLink
              to={`/login`}
              className={({ isActive, isPending }) =>
                isActive ? "text-red-400" : isPending ? "pending" : ""
              }
            >
              Login
            </NavLink>
          </li>
          <li className="text-lg font-normal">
            <NavLink
              to={`/register`}
              className={({ isActive, isPending }) =>
                isActive ? "text-red-400" : isPending ? "pending" : ""
              }
            >
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-lg">
      <nav className="flex items-center justify-between container mx-auto px-10  py-6">
        <div>
          <h1>PhoneBD</h1>
        </div>
        <div>
          <ul className="flex gap-x-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive ? "bg-green-400" : isPending ? "pending" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favarate"
                className={({ isActive, isPending }) =>
                  isActive ? "bg-green-400" : isPending ? "pending" : ""
                }
              >
                Favarate
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isActive ? "bg-green-400" : isPending ? "pending" : ""
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

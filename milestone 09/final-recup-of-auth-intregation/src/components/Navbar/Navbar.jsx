import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between max-w-screen-lg mx-auto bg-purple-100 p-6">
      <div>logo</div>
      <div>
        <ul className="flex gap-x-5">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

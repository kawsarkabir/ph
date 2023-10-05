import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-around py-3 shadow bg-purple-200">
        <div>
       
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div>
          <ul className="gap-x-7 flex text-lg">
            <NavLink to={`/`}>Home</NavLink>
            <NavLink to={`/login`}>Login</NavLink>
            <NavLink to={`/register`}>Register</NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

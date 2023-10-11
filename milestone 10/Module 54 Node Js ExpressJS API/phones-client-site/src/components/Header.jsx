import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <ul className="flex justify-center gap-10 mt-10 ">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>login</NavLink>
          </li>
          <li>
            <NavLink to={"/phones"}>phones</NavLink>
          </li>
          <li>
            <NavLink to={"/phone"}>phone</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

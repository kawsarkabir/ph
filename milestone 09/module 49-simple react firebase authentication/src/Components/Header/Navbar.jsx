import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="">
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/login`}>Login</Link>
        </li>
      </nav>
    </div>
  );
};

export default Navbar;

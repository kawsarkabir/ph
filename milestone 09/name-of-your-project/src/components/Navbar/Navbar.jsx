import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };
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
        <div>
          {user ? (
            <>
              <span>{user.email}</span>
              <button
                onClick={handleSignOut}
                className="btn btn-sm btn-primary"
              >
                sign out
              </button>
            </>
          ) : (
            <Link to={`/login`}>
              <button className="btn btn-sm btn-primary">Login</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

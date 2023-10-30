import { Link } from "react-router-dom";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";

const Register = () => {
  const [person, setPerson] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setPassword] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setPerson(user);
        setSuccess("create successfully");
      })
      .catch((error) => setError(error.message));
  };
  const handleSignOut = () => {
    console.log("hitesd");
    signOut(auth)
      .then(() => {
        setPerson("");
        setSuccess("create successfully");
      })
      .catch((error) => setError(error.message));
  };
  const handleGithubSignIn = () => {
    console.log("github");
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setPerson(user);
        setSuccess("create successfully");
      })
      .catch((error) => setError(error.message));
  };
  const handleSubmitFrom = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.checkbox.checked
    console.log(accepted);
    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError("mamma password 6 okkhorer na hole hobena");
      return;
    } else if (
      !/[A-Z]/.test(password)
    ) {
      setError(
        "at least 1 letter uppercase and one numbaric and samble sign use must be"
      );
      return;
    }else if(!accepted){
      setError('please accepted our terms and condition!')
      return
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setPerson(user);
        setSuccess("create successfully");
        console.log(user);
      })
      .catch((error) => setError(error.message));
  };
  

  return (
    <div className="flex justify-between min-h-screen">
      <div className=" mt-8 w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSubmitFrom} className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign Up to our platform
          </h5>
          <div>
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
            <span
              className="relative bottom-7 left-72 cursor-pointer"
              onClick={() => setPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye></FaEye>}
            </span>
          </div>
          <div className="flex items-start"></div>
          <div className="flex gap-x-3">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label for="checkbox">Accept Our Terms and conditon</label>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign Up
          </button>
          <h1>{error && <p>{error}</p>}</h1>
          <h1>{success && <p>{success}</p>}</h1>
          <div>
            <h3 className="flex gap-x-5 text-xl justify-center">
              <FaGoogle onClick={handleGoogleSignIn} />
              <HiOutlineMail />
              <FaGithub onClick={handleGithubSignIn} />
            </h3>
          </div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already Have Account ?
            <Link
              to={"/login"}
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Please Login
            </Link>
          </div>
        </form>
      </div>
      <div>
        <h1 className="mt-8 mr-32">Heree is user Info</h1>

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-end px-4 pt-4">
            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              type="button"
            >
              <span className="sr-only">Open dropdown</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </button>

            <div
              id="dropdown"
              className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Export Data
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={person?.photoURL}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {person?.displayName}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Visual Designer
            </span>
            <h1>{person?.email}</h1>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Edit Profile
              </a>
              <a
                onClick={handleSignOut}
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              >
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

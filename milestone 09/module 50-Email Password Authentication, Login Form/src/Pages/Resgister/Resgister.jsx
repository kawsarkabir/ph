import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../../firebase/firebase.config";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Resgister = () => {
  const [registerError, setRegisterError] = useState("");
  const [showPassword, setPassword] = useState(false);
  const [successMessage, setSuccessMassage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(accepted);
    setRegisterError("");
    setSuccessMassage("");

    if (password.langth < 6) {
      setRegisterError("6 letter ar kom diya jabe na");
      return;
    } else if (/[A-Z]/.test(password)) {
      setRegisterError("boro hater lekho");
      return;
    } else if (!accepted) {
      setRegisterError("acceoter out terms and conditions");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccessMassage("user create an successfully");
      })
      .catch((error) => setRegisterError(error.message));
  };
  return (
    <div className="flex justify-center items-center mt-16">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleFormSubmit} action="#">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <span onClick={() => setPassword(!showPassword)}>
                    {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                  </span>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="flex">
                  <input type="checkbox" name="terms" id="terms" />
                  <label className="label">
                    <span className="label-text">
                      accepted out terms and conditons
                    </span>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                  <p>
                    {registerError && (
                      <p className="text-red-500">{registerError}</p>
                    )}
                    {successMessage && <p>{successMessage}</p>}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resgister;

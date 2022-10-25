import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import UseFirebase from "../../Hooks/UseFirebase";
import loginbg from "../../Assects/login_bg.svg";

const Register = () => {
  const {
    hendelRegister,
    hendelSignInWithGoogle,
    hendelSignInWithFacebook,
    hendelSignInWithGithub,
    error,
    setError,
  } = UseFirebase();

  const [myPassword, setPassword] = useState();

  const hendelPassword = (event) => {
    const form = event.target;
    // console.log(form.value);
    if (!/(?=.*[A-Z].*[A-Z])/.test(myPassword)) {
      setError("Password must contain at least two uppercase letters");
      return;
    }
    if (myPassword.length < 8) {
      setError("Password must contain at least 6 characters");
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(myPassword)) {
      setError("Password must contain at least one special character");
      return;
    }
    if (!/(?=.*[0-9].*[0-9])/.test(myPassword)) {
      setError("Password must contain at least two digits");
      return;
    }
    setError("");

    setPassword(form.value);
  };

  return (
    <div>
      <section>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">
                <span className="text-blue-600">Login</span> now!
              </h1>
              <div>
                <img src={loginbg} alt="Login" />
              </div>
            </div>
            <div className="card m-4 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form action="" onSubmit={(event) => hendelRegister(event)}>
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="full Name"
                      name="fullName"
                      // required
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      type="text"
                      placeholder="photoURL"
                      name="photoURL"
                      // required
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      name="email"
                      required
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      onBlur={hendelPassword}
                      placeholder="password"
                      name="password"
                      required
                      className="input input-bordered"
                    />
                    <label className="label mt-2">
                      <Link
                        to="/login"
                        className="label-text-alt link link-hover text-[1rem]"
                      >
                        Already have an account{" "}
                        <span className="text-blue-600">Login Now</span>
                      </Link>
                    </label>
                  </div>
                  <div>
                    <p className="text-red-600">{error}</p>
                  </div>
                  <div className="form-control mt-3">
                    <button className="btn btn-primary">Register Now</button>
                  </div>
                  <div className="form-control mt-2">
                    <button
                      className="btn btn-primary m-2"
                      onClick={hendelSignInWithGoogle}
                    >
                      <FaGoogle className="mr-2 text-[1.5rem]"></FaGoogle> Login
                      with Google
                    </button>
                    <button
                      className="btn btn-primary mb-2"
                      onClick={hendelSignInWithFacebook}
                    >
                      <FaFacebook className="mr-2 text-[1.5rem]"></FaFacebook>{" "}
                      Login with Facebook
                    </button>
                    <button
                      className="btn btn-primary mb-2"
                      onClick={hendelSignInWithGithub}
                    >
                      <FaGithub className="mr-2 text-[1.5rem]"></FaGithub> Login
                      with Github
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;

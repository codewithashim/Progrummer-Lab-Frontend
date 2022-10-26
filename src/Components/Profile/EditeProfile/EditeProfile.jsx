import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import app from "../../../Firebase/Firebase.config";
import { getAuth, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Context/AuthProvider";
const auth = getAuth(app);

const EditeProfile = () => {
  const { user } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [name, setName] = useState(user.displayName);
  const [photoURL, setPhotoURL] = useState(user.photoURL);

  const hendelSubmit = (event) => {
    event.preventDefault();
    console.log(name, photoURL);
  };

  const hendelNameChange = (event) => {
    setName(event.target.value);
  };

  const hendelPhotoURL = (event) => {
    setPhotoURL(event.target.value);
  };

  //   const hendelUpdateProfile = (name, photoURL) => {
  //     const profile = {
  //       displayName: name,
  //       photoURL: photoURL,
  //     };
  //     updateProfile(auth.currentUser, profile)
  //       .then(() => {
  //         Swal.fire("Successfuly Update Profile", "", "success");
  //       })
  //       .catch((error) => {
  //         const errorMessage = error.message;
  //         setError(errorMessage);
  //         Swal.fire({
  //           icon: "error",
  //           title: "Oops...",
  //           text: errorMessage,
  //         });
  //       });
  //   };

  return (
    <div>
      <div className="hero w-full">
        <div className="hero-content w-full">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={hendelSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    readOnly
                    defaultValue={user?.email}
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={hendelNameChange}
                    defaultValue={name}
                    placeholder="Full Name"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    onChange={hendelPhotoURL}
                    defaultValue={photoURL}
                    placeholder="Photo URL"
                    name="photoURL"
                    className="input input-bordered"
                  />
                </div>

                <div>
                  <p className="text-red-600">{error}</p>
                </div>

                <div className="form-control mt-6">
                  <Link className="btn btn-primary">Edite Profile</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditeProfile;

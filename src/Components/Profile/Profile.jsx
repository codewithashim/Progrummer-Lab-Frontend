import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import EditeProfile from "./EditeProfile/EditeProfile";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <section className="p-6">
        <div className="text-center">
          <h1 className="font-bold text-3xl">
            Hey Wellcome{" "}
            <span className="text-red-500">{user.displayName} 🖐️</span>
          </h1>
        </div>
        <div className="profileDetails mt-6">
          <div className="card lg:card-side mx-auto p-4 w-2/3 bg-base-100 shadow-xl">
            <figure>
              <img
                src={user.photoURL}
                alt={user.displayName}
                style={{ width: "8rem", borderRadius: "50%" }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{user.displayName}</h2>
              <p>{user.email}</p>
            </div>
          </div>
          <div>
            <div className="divider"></div>
          </div>
        </div>
        <div className="editProfile">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-600">
              Edit Your Profile
            </h2>
          </div>
          <div>
            <div>{<EditeProfile user={user}></EditeProfile>} </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;

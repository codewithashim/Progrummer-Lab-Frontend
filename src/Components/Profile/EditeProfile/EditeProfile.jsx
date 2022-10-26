import React from "react";
import { Link } from "react-router-dom";

const EditeProfile = ({ user }) => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content w-full">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  readOnly
                  value={user.email}
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
                  value={user.displayName}
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
                  value={user.photoURL}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <Link className="btn btn-primary">Edite Profile</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditeProfile;

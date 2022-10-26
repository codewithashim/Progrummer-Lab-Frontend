import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assects/logo.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaSun, FaCloudSun } from "react-icons/fa";
import { useState } from "react";
import "./Header.css";
import UseFirebase from "../../Hooks/UseFirebase";
import { AuthContext } from "../../Context/AuthProvider";
const Header = () => {
  const [cetagory, setCetagory] = useState([]);

  useEffect(() => {
    fetch("https://progrummer-lab-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCetagory(data));
  }, []);

  const { user } = useContext(AuthContext);
  const { hendelLogout } = UseFirebase();

  const [toggol, setToggol] = useState(true);
  return (
    <>
      <header className="mainHeaderSection">
        <nav>
          <div className="navbar bg-base-100 shadow-lg px-6">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-1 p-1 shadow bg-base-100 rounded-box w-40"
                >
                  {/* ======== cetagory======== */}
                  <li tabIndex={0} style={{ zIndex: "80" }}>
                    <Link className="text-blue-600">
                      <HiMenuAlt1></HiMenuAlt1>
                      Cetagory
                    </Link>
                    <ul className="p-2">
                      <li>
                        {cetagory.map((cetagory) => {
                          return (
                            <NavLink className="mb-1">
                              <Link to={`/cetagory/${cetagory.id}`}>
                                {cetagory.category}
                              </Link>
                            </NavLink>
                          );
                        })}
                      </li>
                    </ul>
                  </li>
                  {/* ======== cetagory======== */}
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                    to="/home"
                  >
                    Home
                  </NavLink>
                  <li>
                    <NavLink to="/courses">Courses</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to="/faq">FAQ</NavLink>
                  </li>
                </ul>
              </div>
              <Link className="normal-case text-xl" to="/">
                <img src={logo} alt="Programmer Lab" width={70} />
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal p-0">
                {/* ======== cetagory ========== */}

                <li tabIndex={0} style={{ zIndex: "80" }}>
                  <Link className="text-blue-600">
                    <HiMenuAlt1></HiMenuAlt1>
                    Cetagory
                  </Link>
                  <ul className="p-2">
                    <li>
                      {cetagory.map((cetagory) => {
                        return (
                          <NavLink className="mb-1">
                            <Link to={`/cetagory/${cetagory.id}`}>
                              {cetagory.category}
                            </Link>
                          </NavLink>
                        );
                      })}
                    </li>
                  </ul>
                </li>
                {/* ======= Cetagoty */}
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>

                <li>
                  <NavLink to="/courses">Courses</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/faq">FAQ</NavLink>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <div className="darkMode mr-3">
                <Link onClick={() => setToggol(!toggol)}>
                  {toggol ? (
                    <FaSun className="text-3xl text-blue-300"></FaSun>
                  ) : (
                    <FaCloudSun className="text-3xl text-black"></FaCloudSun>
                  )}
                </Link>
              </div>
              <div>
                <Link className="flex items-center gap-4">
                  {user?.uid ? (
                    <>
                      <Link to="/profile">
                        <img
                          src={user.photoURL}
                          alt="profie"
                          width="40"
                          style={{
                            borderRadius: "50%",
                            margininsetInlineEnd: "10px",
                          }}
                        />
                        {/* <h1>{user.displayName}</h1> */}
                      </Link>

                      <Link
                        to="/login"
                        className=" btn btn-primary font-semibold btn-sm"
                        onClick={() => hendelLogout()}
                      >
                        Logout
                      </Link>
                    </>
                  ) : (
                    <Link
                      to="/login"
                      className=" btn btn-warning font-semibold btn-sm"
                    >
                      Login
                    </Link>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

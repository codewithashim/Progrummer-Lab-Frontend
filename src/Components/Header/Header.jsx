import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assects/logo.png";
import {
  HiMenuAlt1,
  HiOutlineCode,
  HiSpeakerphone,
  HiOutlineDatabase,
  HiOutlinePresentationChartBar,
} from "react-icons/hi";
import {
  FaPenNib,
  FaFigma,
  FaRegChartBar,
  FaSun,
  FaCloudSun,
} from "react-icons/fa";
import { useState } from "react";
const Header = () => {
  const [toggol, setToggol] = useState(true);

  return (
    <>
      <header>
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
                  className="menu menu-compact dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-52"
                >
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
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
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
                <li tabIndex={0}>
                  <Link className="text-blue-600">
                    <HiMenuAlt1></HiMenuAlt1>
                    Cetagory
                  </Link>
                  <ul className="p-2">
                    <li className="mb-2">
                      <NavLink>
                        <HiOutlineCode></HiOutlineCode>
                        Web Development
                      </NavLink>
                    </li>
                    <li className="mb-2">
                      <NavLink>
                        <HiSpeakerphone></HiSpeakerphone>
                        Digital Marketing
                      </NavLink>
                    </li>
                    <li className="mb-2">
                      <NavLink>
                        <FaFigma></FaFigma>
                        UI/UX Design
                      </NavLink>
                    </li>
                    <li className="mb-2">
                      <NavLink>
                        <HiOutlineDatabase></HiOutlineDatabase>
                        DataSince
                      </NavLink>
                    </li>
                    <li className="mb-2">
                      <NavLink>
                        <HiOutlinePresentationChartBar></HiOutlinePresentationChartBar>
                        Finance Managment
                      </NavLink>
                    </li>
                    <li className="mb-2">
                      <NavLink>
                        <FaPenNib></FaPenNib>
                        Graphic Design
                      </NavLink>
                    </li>
                    <li className="mb-2">
                      <NavLink>
                        <FaRegChartBar></FaRegChartBar>
                        Product Marketing
                      </NavLink>
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
                <li>
                  <NavLink to="/contact">Contact</NavLink>
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
              <Link className="btn btn-sm mx-3">Login</Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

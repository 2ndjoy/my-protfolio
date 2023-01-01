import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkLightContext } from "../../Context/DarkLightContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const { theme, setTheme } = useContext(DarkLightContext);
  const handleNight = () => {
    const newTheme = false;
    setTheme(newTheme);
  };
  const handleDay = () => {
    const newTheme = true;
    setTheme(newTheme);
  };

  return (
    <div>
      <div className="navbar bg-base-100">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/projects">PROJECTS</Link>
              </li>
              <li>
                <Link to="/info">INFO</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-xl font-semibold ml-3">
            RAHUL CHAKRABARTY JOY
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/projects" className="hover:font-semibold">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to="/info" className="hover:font-semibold">
                INFO
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:font-semibold">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {theme ? (
            <button className="btn btn-ghost" onClick={handleNight}>
              <FaMoon />
            </button>
          ) : (
            <button className="btn btn-ghost" onClick={handleDay}>
              <FaSun />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

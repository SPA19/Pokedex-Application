import React from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/img/Pokémon_logo.svg.png";
import ProfileAnonymous from "../assets/img/user_default.jpg";
import { useSelector } from "react-redux";

export const Navigation = () => {
  const { isAuthenticated } = useSelector((state) => state.UserLogin);

  return (
    <div>
      <div className="navbar bg-secondary">
        <div className="flex-1 ">
          <Link to="/">
            <img className="w-auto h-[4rem]" src={Logo} alt="Logo pokemon" />
          </Link>
        </div>
        {isAuthenticated && (
          <div className="flex-none gap-2">
            <div className="form-control flex flex-row">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-28 md:w-auto"
              />
              <button className="btn btn-ghost btn-circle">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={ProfileAnonymous}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/">Login</Link>
                </li>
                <li>
                  <Link to="/search">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <Outlet />
    </div>
  );
};

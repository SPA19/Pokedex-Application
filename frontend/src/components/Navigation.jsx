import React from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/img/Pokémon_logo.svg.png";
import ProfileAnonymous from "../assets/img/user_default.jpg";

export const Navigation = () => {
  return (
    <div>
      <div className="navbar bg-secondary">
        <div className="flex-1 ">
          <Link to="/">
            <img className="w-56 h-[4rem]" src={Logo} alt="Logo pokemon" />
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
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
                <Link to="/" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/search">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

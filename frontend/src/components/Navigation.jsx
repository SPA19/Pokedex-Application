import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/Pokémon_logo.svg.png";
import ProfileAnonymous from "../assets/img/user_default.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setSearchName } from "../features/users/userSlice";

export const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthToken = localStorage.getItem("token");
  const { isAuthenticated } = useSelector((state) => state.UserLogin);

  const [search, setSearch] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(isAuthenticated(false));
  };

  const handleFindPokemon = () => {
    if (search.length !== 0) {
      dispatch(setSearchName(search));

      setTimeout(() => {
        navigate("/serch");
      }, 200);
    }
  };

  return (
    <div>
      <div className="navbar bg-secondary">
        <div className="flex-1 ">
          <Link to="/">
            <img className="w-auto h-[4rem]" src={Logo} alt="Logo pokemon" />
          </Link>
        </div>
        {isAuthToken && (
          <div className="flex-none gap-2">
            <div className="form-control flex flex-row">
              <form>
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  className="input input-bordered w-80"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  className="btn btn-outline btn-circle shadow-lg mx-4"
                  onClick={handleFindPokemon}
                >
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
              </form>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="Profile" src={ProfileAnonymous} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/pokemons">Home</Link>
                </li>
                <li>
                  <Link to="/" onClick={handleLogout}>
                    Logout
                  </Link>
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

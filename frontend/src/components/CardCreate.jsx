import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginCreateThunk, setCreateUser, setMessageErrCreate } from "../features/users/userSlice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const CardCreate = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { createUser, isAuthenticated, messageErrCreate } = useSelector(
    (state) => state.UserLogin
  );
  const [alertMessage, setAlertMessage] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/search");
    }
    if (messageErrCreate !== null) {
      setAlertMessage(true);
      setTimeout(() => {
        setAlertMessage(false);
        dispatch(setMessageErrCreate(null));
      }, 2000);
    }
  }, [isAuthenticated, messageErrCreate]);

  const onSubmit = handleSubmit((values) => {
    dispatch(loginCreateThunk(values));
    console.log(values);
  });

  const handlChangeUser = () => {
    dispatch(setCreateUser(!createUser));
  };

  return (
    <div className="hero min-h-[80vh] bg-base-200">
      <div className="hero-content w-[65rem] flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-xl border-2 bg-base-100">
          <form className="card-body" onSubmit={onSubmit}>
            <div className="form-control my-2">
              <div className="label">
                <h1 className="text-2xl font-semibold pb-6">Crear cuenta</h1>
              </div>
              <input
                type="text"
                placeholder="Nombre de usuario"
                className="input hover:input-bordered h-14 text-lg bg-gray-100"
                required
                {...register("username")}
              />
            </div>
            <div className="form-control pt-2 pb-2">
              <input
                type="email"
                placeholder="Correo"
                className="input hover:input-bordered h-14 text-lg bg-gray-100"
                required
                {...register("email")}
              />
            </div>
            <div className="form-control pt-2 pb-4">
              <input
                type="password"
                placeholder="Contraseña"
                className="input hover:input-bordered h-14 text-lg bg-gray-100"
                required
                {...register("password")}
              />
            </div>
            <div className="form-control ">
              <button type="submit" className="btn btn-secondary">
                Entrar
              </button>
            </div>
          </form>
          <div className="flex place-content-end pb-4 pr-8">
            <button
              type="button"
              className="btn btn-sm btn-secondary btn-outline w-[7rem] "
              onClick={handlChangeUser}
            >
              Usuario
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {alertMessage && (
        <div
          role="alert"
          className="alert alert-error fixed top-[92%] w-1/2 right-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{messageErrCreate}</span>
        </div>
      )}
    </div>
  );
};

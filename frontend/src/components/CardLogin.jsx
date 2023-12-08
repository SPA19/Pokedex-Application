import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk, setCreateUser } from "../features/users/userSlice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const CardLogin = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { createUser, isAuthenticated, loginSucces } = useSelector(
    (state) => state.UserLogin
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/search");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit((values) => {
    dispatch(loginUserThunk(values));
    console.log(values);
  });

  const handleChangeCreate = () => {
    dispatch(setCreateUser(!createUser));
  };

  return (
    <div className="hero min-h-[80vh] bg-base-200">
      <div className="hero-content w-[65rem] flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-xl border-2 bg-base-100">
          <form className="card-body" onSubmit={onSubmit}>
            <div className="form-control my-2">
              <div className="label">
                <h1 className="text-2xl font-semibold pb-8">
                  Inicio de sesión
                </h1>
              </div>
              <input
                type="email"
                placeholder="Correo"
                className="input hover:input-bordered h-14 text-lg bg-gray-100"
                required
                {...register("email")}
              />
            </div>
            <div className="form-control mt-2 mb-4">
              <input
                type="password"
                placeholder="Contraseña"
                className="input hover:input-bordered h-14 text-lg bg-gray-100"
                required
                {...register("password")}
              />
            </div>
            <div className="form-control mt-2 mb-4">
              <button type="submit" className="btn btn-secondary">
                Entrar
              </button>
            </div>
          </form>
        </div>
        <div className="m-12">
          <h1 className="text-5xl text-left font-bold">
            Bienvenido al mundo Pokémon
          </h1>
          <p className="text-xl text-justify py-10">
            Disfruta de una experiencia pokemon donde podras ver todo lo
            relacionado a los pokemones y sus caracteristicas, si no tienes una
            cuenta te invitamos a registrarte.
          </p>
          <button
            className="btn btn-secondary btn-lg"
            onClick={handleChangeCreate}
          >
            Registrar
          </button>
        </div>
      </div>
    </div>
  );
};

export const CardLogin = () => {
  return (
    <div className="hero min-h-[45rem] bg-base-200">
      <div className="hero-content w-[65rem] flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-xl border-2 bg-base-100">
          <form className="card-body">
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
              />
            </div>
            <div className="form-control mt-2 mb-4">
              <input
                type="password"
                placeholder="Contraseña"
                className="input hover:input-bordered h-14 text-lg bg-gray-100"
                required
              />
            </div>
            <div className="form-control mt-2">
              <button type="submit" className="btn btn-secondary">
                Entrar
              </button>
            </div>
          </form>
        </div>
        <div className="m-12">
          <h1 className="text-5xl font-bold">¡Bienvenido!</h1>
          <p className="text-xl text-justify py-10">
            Disfruta de una experiencia pokemon donde podras ver todo lo
            relacionado a los pokemones y sus caracteristicas, si no tienes una
            cuenta te invitamos a registrate aqui.
          </p>
          <button className="btn btn-secondary btn-lg">Crear cuenta</button>
        </div>
      </div>
    </div>
  );
};

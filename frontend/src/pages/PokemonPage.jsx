import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardPokemon } from "../components/CardPokemon";
import { getLimitPokemons, setOffset } from "../features/users/userSlice";

export const PokemonPage = () => {
  const dispatch = useDispatch();
  const { pokemonsDetails, offset } = useSelector((state) => state.UserLogin);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(getLimitPokemons(12, 0, pokemonsDetails));
      dispatch(setOffset(offset + 12));
    }
  }, []);

  const handleAddPokemons = () => {
    const limit = 15;
    dispatch(getLimitPokemons(limit, offset, pokemonsDetails));
    dispatch(setOffset(offset + limit));
  };

  return (
    <div>
      <div
        className="grid justify-items-center m-8 gap-8 xl:grid-cols-4
      lg:grid-cols-3 md:grid-cols-2 ms:grid-cols-1"
      >
        {pokemonsDetails.map((pokemon) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>

      <div className="grid justify-items-center m-10 ">
        <button
          className="btn btn-secondary btn-lg shadow-lg"
          onClick={handleAddPokemons}
        >
          Cargar mas
        </button>
      </div>
    </div>
  );
};

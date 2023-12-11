import React from "react";
import { Link } from "react-router-dom";

export const CardPokemon = ({ pokemon }) => {
  
  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className="card w-96 hover:animate-pulse"
    >
      <div className="card w-96 shadow-xl bg-gray-100">
        <figure>
          <img
            src={pokemon?.sprites?.other?.dream_world?.front_default}
            alt={`Pokemon ${pokemon.name}`}
            className="w-64 h-64 p-4"
          />
        </figure>
        <div className="card-body ">
          <h1 className="text-sm font-light px-2">N.° {pokemon.id}</h1>
          <h2 className="text-4xl text-left font-bold capitalize">
            {pokemon?.name}
          </h2>

          <div className="flex items-center">
            <h3 className="text-left text-lg font-semibold pr-1">Type:</h3>
            {pokemon?.types?.map((type) => (
              <div
                key={type?.type?.name}
                className="text-left text-lg font-normal px-1.5 capitalize"
              >
                {type?.type?.name}
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <h3 className="text-left text-lg font-semibold pr-2">Abilities:</h3>
            {pokemon?.abilities?.map((abilit) => (
              <div
                key={abilit?.ability?.name}
                className="text-left text-lg font-normal pr-3"
              >
                {abilit?.ability?.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

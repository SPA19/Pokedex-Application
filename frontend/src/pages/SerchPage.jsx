import React, { useEffect } from "react";
import { getGlobalPokemons } from "../features/users/userSlice";
import { useDispatch } from "react-redux";
import { CardPokemon } from "../components/CardPokemon";

export const SerchPage = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { searchName, isAuthenticated, allPokemons } = useSelector(
    (state) => state.UserLogin
  );
  useEffect(() => {
    
      dispatch(getGlobalPokemons(searchName));
      console.log(allPokemons);
   
  }, []);

  return (
    <div>
      <div
        className="grid justify-items-center m-8 gap-8 xl:grid-cols-4
      lg:grid-cols-3 md:grid-cols-2 ms:grid-cols-1"
      >
        {allPokemons.map((pokemon) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};

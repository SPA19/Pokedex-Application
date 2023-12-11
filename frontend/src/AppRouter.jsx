import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import {
  Error404Page,
  LoginPage,
  PokemonPage,
  SerchPage,
} from "./pages";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<LoginPage />} />
          <Route path="pokemons" element={<PokemonPage />} />
          <Route path="serch" element={<SerchPage/>} />
          <Route path="pokemon/:id" element={ <Error404Page/>} />
        </Route>
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
};

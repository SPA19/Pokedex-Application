import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Error404Page, LoginPage, PokemonPage, SerchPage } from "./pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<LoginPage />} />
        <Route path="pokemon/:id" element={<PokemonPage />} />
        <Route path="search" element={<SerchPage />} />
      </Route>

      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
};

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import {
  Error404Page,
  LoginPage,
  PokemonPage,
  ProfilePage,
  SerchPage,
} from "./pages";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<LoginPage />} />
          <Route path="pokemon/:id" element={<PokemonPage />} />
          <Route path="search" element={<SerchPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
};

import React from "react";
import { CardLogin } from "../components/CardLogin";
import { useSelector } from "react-redux";
import { CardCreate } from "../components/CardCreate";

export const LoginPage = () => {
  const { createUser } = useSelector((state) => state.UserLogin);

  return <div>{createUser ? <CardCreate /> : <CardLogin />}</div>;};

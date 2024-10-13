import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";

export function Routes() {
  const { isAuth } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isAuth ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}

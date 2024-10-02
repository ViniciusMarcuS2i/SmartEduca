import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useState } from "react";

export function Routes() {
  const [auth, setAuth] = useState(false);
  return (
    <NavigationContainer>
      {auth ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
}

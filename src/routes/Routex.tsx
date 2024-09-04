import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./auth.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}

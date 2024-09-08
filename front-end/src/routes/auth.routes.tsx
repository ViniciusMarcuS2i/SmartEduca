import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FirstScreen } from "../screens/auth/FirstScreen";
import { SignIn } from "../screens/auth/SignIn";
import { SignUp } from "../screens/auth/SignUp";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="first" component={FirstScreen} />
      <Stack.Screen name="signIn" component={SignIn} />
      <Stack.Screen name="signUp" component={SignUp} />
    </Stack.Navigator>
  );
}

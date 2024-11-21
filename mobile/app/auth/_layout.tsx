import { useContext } from "react";
import ContextProvider, { AuthContext } from "../_contexts/authContext";
import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

function Layout() {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Redirect href="/logged/home" />;
  }

  return (
    <>
      <ContextProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="first-apresentation" />
          <Stack.Screen name="second-apresentation" />
          <Stack.Screen name="forgot" />
          <Stack.Screen name="sign-in" />
          <Stack.Screen name="sign-up" />
        </Stack>
      </ContextProvider>
      <StatusBar translucent={true} style="light" />
    </>
  );
}

export default Layout;

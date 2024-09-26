import { useFonts } from "expo-font";
import { SplashScreen } from "./src/screens/SplashScreen";

import { StatusBar } from "expo-status-bar";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Routes } from "./src/routes/Routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  return (
    <>
      <StatusBar translucent />
      {fontsLoaded ? <Routes /> : <SplashScreen />}
    </>
  );
}

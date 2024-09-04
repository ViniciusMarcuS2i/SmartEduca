import { useFonts } from "expo-font";
import { SplashScreen } from "./src/screens/SplashScreen";

import { StatusBar } from "expo-status-bar";
import {
  Exo_400Regular,
  Exo_600SemiBold,
  Exo_700Bold,
} from "@expo-google-fonts/exo";
import { Routes } from "./src/routes/Routex";
import { Home } from "./src/screens/app/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Exo_400Regular,
    Exo_600SemiBold,
    Exo_700Bold,
  });

  return (
    <>
      <StatusBar translucent />
      {fontsLoaded ? <Routes /> : <SplashScreen />}
    </>
  );
}

import "react-native-reanimated";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { SplashScreen } from "./src/screens/SplashScreen";

import { StatusBar } from "expo-status-bar";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Routes } from "./src/routes/Routes";
import { ContextProvider } from "./src/context/authContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  return (
    <ContextProvider>
      <StatusBar translucent />
      {fontsLoaded ? <Routes /> : <SplashScreen />}
    </ContextProvider>
  );
}

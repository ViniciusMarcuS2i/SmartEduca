import { Slot } from "expo-router";
import ContextProvider from "./_contexts/authContext";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { splashLogo } from "./_assets/images";

function Layout() {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      setIsLoading(false);
    }
  }, [fontsLoaded]);

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-primary">
        <Image source={splashLogo} />
      </SafeAreaView>
    );
  }

  if (!isLoading) {
    return (
      <ContextProvider>
        <Slot />
      </ContextProvider>
    );
  }
}

export default Layout;

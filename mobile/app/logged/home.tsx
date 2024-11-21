import { SafeAreaView } from "react-native-safe-area-context";
import auth from "@react-native-firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../_contexts/authContext";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { banner, logo } from "../_assets/images";
import { Ionicons } from "@expo/vector-icons";
import PressableOption from "../_components/pressableOption";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

function Home() {
  const { currentUser } = useContext(AuthContext);

  const handleLogout = () => {
    Alert.alert("Deseja sair?", "Você será deslogado", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Sair",
        onPress: () => {
          auth().signOut();
        },
      },
    ]);
  };

  return (
    <>
      <View className="flex-1 bg-white">
        <View className="flex-row items-center justify-between px-9 pt-20">
          <View className="flex-row gap-4">
            <Image
              source={logo}
              className="h-14 w-14 rounded-full border-2 border-primary"
              resizeMode="contain"
            />
            <View>
              <Text className="font-poppinsSemi text-xl text-primary">
                Olá, {currentUser?.name}
              </Text>
              <Text className="font-sans text-[#636d77]">
                Veja como está seu filho(a)
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={handleLogout} activeOpacity={0.7}>
            <Ionicons name="log-out-outline" size={28} color="#1fcdff" />
          </TouchableOpacity>
        </View>
        <View className="px-9 pt-9">
          <Image
            source={banner}
            className="h-52 w-full rounded-2xl"
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            borderTopRightRadius: 36,
            borderTopLeftRadius: 36,
            elevation: 14,
          }}
          className="mt-20 flex-1 bg-[#fff]"
        >
          <ScrollView
            horizontal
            contentContainerStyle={{
              justifyContent: "space-between",
              width: "100%",
              paddingHorizontal: 24,
              paddingVertical: 24,
            }}
          >
            <PressableOption
              title="Calendário"
              icon="calendar-outline"
              color="#316D86"
              onPress={() => router.navigate("/logged/calendar")}
            />
            <PressableOption
              title="Matérias"
              icon="book-outline"
              color="#27487F"
              onPress={() => router.navigate("/logged/subjects")}
            />
            <PressableOption
              title="Avisos"
              icon="megaphone-outline"
              color="#F59E0B"
            />
            <PressableOption
              title="Exemplo"
              icon="help-circle-outline"
              color="#46BD84"
            />
          </ScrollView>
        </View>
      </View>
    </>
  );
}

export default Home;

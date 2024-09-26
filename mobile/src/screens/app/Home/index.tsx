import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";
import { HomeCategories } from "../../../components/HomeCategories";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigator = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.profileBox}>
          <View>
            <Text style={styles.welcomeText}>Bem-vindo!</Text>
            <Text style={styles.nameText}>Hi Fulano!</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigator.navigate("profile" as never)}
            activeOpacity={0.7}
          >
            <Image
              resizeMode="cover"
              style={styles.userProfileImage}
              source={require("../../../assets/userIcon.jpg")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.noticeContainer}></View>

        <Text style={styles.categoriesListTitle}>Explore</Text>
        <HomeCategories />
      </View>
      <StatusBar style="dark" translucent />
    </>
  );
}
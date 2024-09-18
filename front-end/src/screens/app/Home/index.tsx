import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";
import { HomeCategoryItem } from "../../../components/HomeCategoryItem/intex";
import { HomeCategories } from "../../../components/HomeCategories";

export function Home() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.profileBox}>
          <View>
            <Text style={styles.welcomeText}>Bem-vindo!</Text>
            <Text style={styles.nameText}>Hi Fulano!</Text>
          </View>
          <TouchableOpacity activeOpacity={0.7}>
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

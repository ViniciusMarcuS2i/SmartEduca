import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";
import { HomeCategories } from "../../../components/HomeCategories";
import { useNavigation } from "@react-navigation/native";
import { MotiImage, MotiText, MotiView } from "moti";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/authContext";

export function Home() {
  const navigator = useNavigation();
  const { userData } = useContext(AuthContext);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.profileBox}>
          <View>
            <MotiText
              from={{
                translateX: -200,
              }}
              animate={{
                translateX: 0,
              }}
              style={styles.welcomeText}
            >
              Bem vindo!
            </MotiText>
            <MotiText
              from={{
                translateX: -200,
              }}
              animate={{
                translateX: 0,
              }}
              delay={200}
              style={styles.nameText}
            >
              Olá, {userData && userData.name}!
            </MotiText>
          </View>
          <TouchableOpacity
            onPress={() => navigator.navigate("profile" as never)}
            activeOpacity={0.7}
          >
            <MotiImage
              from={{
                translateX: 200,
              }}
              animate={{
                translateX: 0,
              }}
              delay={400}
              resizeMode="cover"
              style={styles.userProfileImage}
              source={require("../../../assets/userIcon.jpg")}
            />
          </TouchableOpacity>
        </View>

        <MotiView
          from={{
            translateX: 500,
          }}
          animate={{
            translateX: 0,
          }}
          delay={750}
          style={styles.noticeContainer}
        ></MotiView>

        <MotiText
          from={{
            translateX: -200,
          }}
          animate={{
            translateX: 0,
          }}
          delay={1000}
          style={styles.categoriesListTitle}
        >
          Explore
        </MotiText>
        <HomeCategories />
      </View>
      <StatusBar style="dark" translucent />
    </>
  );
}

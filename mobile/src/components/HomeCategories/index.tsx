import { View } from "react-native";
import { HomeCategoryItem } from "../HomeCategoryItem/intex";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function HomeCategories() {
  const navigator = useNavigation();

  return (
    <View style={styles.container}>
      <HomeCategoryItem
        onPress={() => navigator.navigate("calendar" as never)}
        icon="calendar-outline"
        text="Calendário"
      />
      <HomeCategoryItem
        onPress={() => navigator.navigate("profile" as never)}
        icon="person-outline"
        text="Perfil"
      />
      <HomeCategoryItem icon="notifications-outline" text="Notificações" />
      <HomeCategoryItem icon="aperture-outline" text="Exemplo" />
      <HomeCategoryItem icon="cog-outline" text="Config" />
    </View>
  );
}

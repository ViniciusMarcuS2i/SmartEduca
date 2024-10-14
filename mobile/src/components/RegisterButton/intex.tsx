import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "./styles";
import React from "react";

interface IButton {
  text: string | React.ReactNode;
}

export function RegisterButton({ text }: IButton) {
  return (
    <View style={styles.signUpButton}>
      {typeof text === "string" ? (
        <Text style={styles.buttonText}>{text}</Text>
      ) : (
        <ActivityIndicator size="large" color="white" />
      )}
    </View>
  );
}

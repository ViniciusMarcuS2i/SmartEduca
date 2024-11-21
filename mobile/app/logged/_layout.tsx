import { Redirect, Tabs } from "expo-router";
import ContextProvider, { AuthContext } from "../_contexts/authContext";
import { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator, View } from "react-native";

import { StatusBar } from "expo-status-bar";

function Layout() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Redirect href="/auth/first-apresentation" />;
  }

  return (
    <ContextProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            paddingTop: 10,
            height: 65,
            alignItems: "center",
          },
          tabBarShowLabel: true,
          tabBarActiveTintColor: "#1fcdff",
        }}
      >
        <Tabs.Screen
          options={{
            tabBarLabel: "Inicio",
            tabBarIcon: ({ color }) => {
              return <Ionicons name="home-outline" color={color} size={24} />;
            },
          }}
          name="home"
        />
        <Tabs.Screen
          options={{
            tabBarLabel: "Calendário",
            tabBarIcon: ({ color }) => {
              return (
                <Ionicons name="calendar-outline" color={color} size={24} />
              );
            },
          }}
          name="calendar"
        />
        <Tabs.Screen
          options={{
            tabBarLabel: "Matérias",
            tabBarIcon: ({ color }) => {
              return <Ionicons name="book-outline" color={color} size={24} />;
            },
          }}
          name="subjects"
        />
        <Tabs.Screen
          options={{
            tabBarLabel: "Perfil",

            tabBarIcon: ({ color }) => {
              return <Ionicons name="person-outline" color={color} size={24} />;
            },
          }}
          name="profile"
        />
      </Tabs>
      <StatusBar style="dark" />
    </ContextProvider>
  );
}

export default Layout;

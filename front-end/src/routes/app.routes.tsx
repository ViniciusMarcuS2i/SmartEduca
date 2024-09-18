import { Home } from "../screens/app/Home";
import { Calendar } from "../screens/app/Calendar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const iconSize = 23;

export function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { height: 65 },
        tabBarInactiveTintColor: "#8696BB",
        tabBarActiveTintColor: "#4894FE",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={iconSize} />
          ),
        }}
        name="home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar" color={color} size={iconSize} />
          ),
        }}
        name="calendar"
        component={Calendar}
      />
    </Tab.Navigator>
  );
}

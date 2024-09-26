import { Home } from "../screens/app/Home";
import { Calendar } from "../screens/app/Calendar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Profile } from "../screens/app/Profile";
import { THEME } from "../theme/theme";

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
        tabBarActiveTintColor: THEME.COLORS.BLUE_150,
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
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={iconSize} />
          ),
        }}
        name="profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
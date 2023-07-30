import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import { Platform } from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { HistoryScreen } from "@screens/HistoryScreen";
import { HydraulicCalculationScreen } from "@screens/HydraulicCalculationScreen";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

export type AppRoutes = {
  HistoryScreen: undefined;
  HydraulicCalculationScreen: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          height: Platform.OS === "ios" ? 58 + getStatusBarHeight() : 58,
          paddingBottom: 4,
          paddingTop: 4,
        },
        tabBarLabelStyle: {
          textTransform: "uppercase",
        },
      }}
    >
      <Screen
        name="HydraulicCalculationScreen"
        component={HydraulicCalculationScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="calculator" color={color} size={24} />
          ),
        }}
      />

      <Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="history" color={color} size={24} />
          ),
        }}
      />
    </Navigator>
  );
}

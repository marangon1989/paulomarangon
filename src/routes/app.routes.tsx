import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import { Platform } from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { CylinderScreen } from "@screens/CylinderScreen";
import { MotorScreen } from "@screens/MotorScreen";
import { PumpScreen } from "@screens/PumpScreen";
import { PressureDropScreen } from "@screens/PressureDropScreen";
import { PipingScreen } from "@screens/PipingScreen";

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { useTheme } from "styled-components";

export type AppRoutes = {
  CylinderScreen: undefined;
  MotorScreen: undefined;
  PumpScreen: undefined;
  PressureDropScreen: undefined;
  PipingScreen: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { colors, font_family } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#3D713C",
        tabBarInactiveTintColor: "#ADADAD",
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 0,
          height: Platform.OS === "ios" ? 58 + getStatusBarHeight() : 58,
          paddingBottom: 4,
          paddingTop: 4,
        },
        tabBarLabelStyle: {
          textTransform: "uppercase",
          fontFamily: font_family.roboto_400,
        },
      }}
    >
      <Screen
        name="CylinderScreen"
        component={CylinderScreen}
        options={{
          tabBarLabel: "Cylinder",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="cog" color={color} size={24} />
          ),
        }}
      />

      <Screen
        name="MotorScreen"
        component={MotorScreen}
        options={{
          tabBarLabel: "Motor",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="car" color={color} size={24} />
          ),
        }}
      />

      <Screen
        name="PumpScreen"
        component={PumpScreen}
        options={{
          tabBarLabel: "Pump",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="tint" color={color} size={24} />
          ),
        }}
      />

      <Screen
        name="PressureDropScreen"
        component={PressureDropScreen}
        options={{
          tabBarLabel: "Pressure Drop",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="thermometer-half" color={color} size={24} />
          ),
        }}
      />

      <Screen
        name="PipingScreen"
        component={PipingScreen}
        options={{
          tabBarLabel: "Piping",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="industry" color={color} size={24} />
          ),
        }}
      />
    </Navigator>
  );
}

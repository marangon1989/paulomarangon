import React from "react";
import { StatusBar } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components/native";

import { Routes } from "@routes/index";
import { Load } from "@components/Load";

import themeApp from "./src/theme/index";

export default function App() {
  const theme = DefaultTheme;

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={themeApp}>
        <NavigationContainer theme={theme}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />

          {fontsLoaded ? <Routes /> : <Load />}
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

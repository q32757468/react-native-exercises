import RootStackScreens from "@/navigator/RootStackScreens";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FAFAFA" />
      <NavigationContainer>
        <RootStackScreens />
      </NavigationContainer>
    </>
  );
};

export default App;

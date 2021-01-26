import Proflie from "@/screens/User/Proflie";
import { RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";
import RootTabScreens, { RootTabParamList } from "./RootTabScreens";

export type RootStackParamList = {
  Proflie: undefined;
  RootTabs: { screen: keyof RootTabParamList };
};

export type RsScreenProps<
  T extends keyof RootStackParamList
> = StackScreenProps<RootStackParamList, T>;

export type RsNavigationProps<
  T extends keyof RootStackParamList
> = StackNavigationProp<RootStackParamList, T>;

export type RsRouteProps<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackScreens = () => {
  return (
    <RootStack.Navigator
      screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}
    >
      <RootStack.Screen
        name="RootTabs"
        component={RootTabScreens}
        options={{ headerShown: false }}
      />

      <RootStack.Screen
        name="Proflie"
        component={Proflie}
        options={{
          headerTitleAlign: "center",
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreens;

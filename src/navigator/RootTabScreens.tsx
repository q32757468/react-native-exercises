import Home from "@/screens/Home";
import UserCenter from "@/screens/User/UserCenter";
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import React from "react";
import { RootStackParamList } from "./RootStackScreens";

export type RootTabParamList = {
  Home: { id: string } | undefined;
  UserCenter: undefined;
} & RootStackParamList;

export type RtScreenProps<
  T extends keyof RootTabParamList
> = BottomTabScreenProps<RootTabParamList, T>;

export type RtNavigationProps<
  T extends keyof RootTabParamList
> = BottomTabNavigationProp<RootTabParamList, T>;

export type RtRouteProps<T extends keyof RootTabParamList> = RouteProp<
  RootTabParamList,
  T
>;

const RootTab = createBottomTabNavigator<RootTabParamList>();

const RootTabScreens = () => {
  return (
    <RootTab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 15 },
        tabStyle: { alignItems: "center", justifyContent: "center" },
      }}
    >
      <RootTab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: "首页" }}
      />
      <RootTab.Screen
        name="UserCenter"
        component={UserCenter}
        options={{ tabBarLabel: "用户" }}
      />
    </RootTab.Navigator>
  );
};

export default RootTabScreens;

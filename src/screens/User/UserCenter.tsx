import { RtNavigationProps } from "@/navigator";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StatusBar, Text, View } from "react-native";

const UserCenter = () => {
  const navigation = useNavigation<RtNavigationProps<"UserCenter">>();

  const goHome = () => {
    navigation.navigate("Home", { id: "这是一个测试id" });
  };

  const goProflie = () => {
    navigation.navigate("Proflie");
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text>这是用户中心的界面</Text>
      <Button onPress={goHome} title="前往首页" />
      <Button onPress={goProflie} title="个人资料" />
    </View>
  );
};

export default UserCenter;

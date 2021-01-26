import { RsNavigationProps } from "@/navigator";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";

const Proflie = () => {
  const navigation = useNavigation<RsNavigationProps<"Proflie">>();

  const goUserCenter = () => {
    navigation.navigate("RootTabs", { screen: "UserCenter" });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>这是个人资料页面</Text>
      <Button onPress={goUserCenter} title="前往用户中心" />
    </View>
  );
};

export default Proflie;

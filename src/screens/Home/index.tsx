import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const goUserCenter = () => {
    navigation.navigate("UserCenter");
  };

  const goProfile = () => {
    navigation.navigate("Proflie");
  };

  useEffect(() => {}, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>这是Home页面,这是一段测试的话</Text>
      <Text>这是传递过来的id:{route.params?.id}</Text>
      <Button onPress={goUserCenter} title="前往用户中心" />
      <Button onPress={goProfile} title="前往个人资料" />
    </View>
  );
};

export default Home;

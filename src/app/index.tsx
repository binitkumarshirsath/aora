import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const root = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>root</Text>
      <Link href={"/(tabs)/home"}>Go to Tabs</Link>
    </View>
  );
};

export default root;

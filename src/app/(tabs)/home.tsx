import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import SearchBar from "../components/SearchBar";

const HomeTab = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="px-4 mt-3">
        <View className="flex-row justify-between items-center">
          <Text className="text-gray-100 font-pmedium text-lg">
            Welcome Back {"\n"}
            <Text className="text-white">Binit</Text>
          </Text>
          <Image
            source={images.logoSmall}
            className="h-8 w-8"
            resizeMode="contain"
          />
        </View>
        <View>
          <SearchBar onChange={(abv) => {}} value="" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeTab;

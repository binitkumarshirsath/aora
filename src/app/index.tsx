import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import image from "../constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import ClickToActionButton from "./components/CTAButton";

const App = () => {
  return (
    <SafeAreaView className=" bg-primary h-full">
      <ScrollView
        className="h-full w-full px-4"
        contentContainerStyle={{ height: "100%" }}
      >
        <View className="justify-center items-center">
          <Image source={image.logo} resizeMode="center" />
          <Image
            source={image.cards}
            resizeMode="contain"
            className="w-full h-96"
          />
          <View className=" mt-5 w-full relative">
            <Text className="font-pbold text-center w-full text-3xl text-gray-50">
              Discover Endless{"\n"} Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={image.path}
              resizeMode="contain"
              className="w-14 h-12 absolute right-2 bottom-0 translate-y-6"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          <ClickToActionButton
            handlePress={() => console.log("hello")}
            isLoading={false}
            label="Continue with Email"
            btnStyles="w-full mt-10"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

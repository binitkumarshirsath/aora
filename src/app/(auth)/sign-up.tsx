import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import image from "@/constants/images";
import CustomInput from "../components/CustomInput";
import { Link } from "expo-router";
import ClickToActionButton from "../components/CTAButton";

const SignUpScreen = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    console.log({ form });
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView keyboardShouldPersistTaps={"handled"}>
        <View className="w-full flex justify-center h-full px-4 my-6">
          <Image
            source={image.logo}
            resizeMode="contain"
            className="w-28 h-8"
          />
          <Text className="text-2xl  font-semibold text-white mt-8 mb-4 font-psemibold">
            Welcome to Aora
          </Text>
          <CustomInput
            label="Username"
            onChange={(e) =>
              setForm((prevData) => ({
                ...prevData,
                username: e,
              }))
            }
            placeholder="Enter your username"
            type="email"
            value={form.username}
            key={3}
          />
          <CustomInput
            label="Email"
            onChange={(e) =>
              setForm((prevData) => ({
                ...prevData,
                email: e,
              }))
            }
            placeholder="Enter your email"
            type="email"
            value={form.email}
            key={1}
          />
          <CustomInput
            label="Password"
            onChange={(e) =>
              setForm((prevData) => ({
                ...prevData,
                password: e,
              }))
            }
            placeholder="Enter your password"
            type="password"
            value={form.password}
            key={2}
          />

          <ClickToActionButton
            label="Sign Up"
            handlePress={handleSubmit}
            isLoading={loading}
            btnStyles="mt-8"
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" translucent />
    </SafeAreaView>
  );
};

export default SignUpScreen;

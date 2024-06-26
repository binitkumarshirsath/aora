import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import image from "@/constants/images";
import CustomInput from "../components/CustomInput";
import { Link, Redirect, router } from "expo-router";
import ClickToActionButton from "../components/CTAButton";
import { getCurrentUser, signInUser } from "@/lib/appwrite";
import { useAuth } from "@/context/AuthContext";

const SignInScreen = () => {
  const { setUser, setIsLoggedIn, isLoggedIn, isLoading } = useAuth();

  if (!isLoading && isLoggedIn) {
    return <Redirect href={"/home"} />;
  }

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      if (!form.email || !form.password) {
        throw new Error("Email and password is required.");
      }
      await signInUser(form.email, form.password);
      const user = await getCurrentUser();
      setUser(user);
      setIsLoggedIn(true);
      router.push("/home");
    } catch (error: any) {
      console.error(error);
      Alert.alert("Error: ", error.message);
    } finally {
      setLoading(false);
    }
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
            Log in to Aora
          </Text>
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

          <Link
            className="text-gray-100  text-base font-pregular self-end mt-3"
            href={"/"}
          >
            Forgot password?
          </Link>

          <ClickToActionButton
            label="Login"
            handlePress={handleSubmit}
            isLoading={loading}
            btnStyles="mt-8"
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" translucent />
    </SafeAreaView>
  );
};

export default SignInScreen;

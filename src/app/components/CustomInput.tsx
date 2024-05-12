import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import icons from "@/constants/icons";

interface CustomInputProps {
  label: string;
  placeholder: string;
  onChange: (e: string) => void;
  type: "email" | "password";
  value: string;
  labelStyle?: string;
  textInputStyle?: string;
}

const CustomInput = ({
  label,
  onChange,
  placeholder,
  type,
  value,
  labelStyle,
  textInputStyle,
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="text-white mt-4 w-full ">
      <Text
        className={`text-lg font-psemibold mb-2 text-gray-100 ${labelStyle}`}
      >
        {label}
      </Text>
      <View className=" w-full  flex flex-row items-center  ">
        <TextInput
          onChangeText={onChange}
          keyboardType={type === "email" ? "email-address" : "default"}
          className={`h-12 flex-1  rounded-2xl border-gray-200 border bg-black-200  focus:border-secondary-200     text-white px-3 ${textInputStyle}`}
          secureTextEntry={type === "password" && showPassword === false}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#CDCDE0"}
        />
        {type === "password" && (
          <TouchableOpacity
            className="absolute right-3"
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              source={showPassword ? icons.eyeHide : icons.eye}
              className="h-6 w-6 "
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;

import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import icons from "@/constants/icons";

interface CustomInputProps {
  onChange: (e: string) => void;

  value: string;
  labelStyle?: string;
  textInputStyle?: string;
}

const SearchBar = ({
  onChange,

  value,
  labelStyle,
  textInputStyle,
}: CustomInputProps) => {
  return (
    <View className="text-white mt-4 w-full ">
      <View className=" w-full  flex flex-row items-center  ">
        <TextInput
          onChangeText={onChange}
          keyboardType="default"
          className={`h-12 flex-1  rounded-2xl  bg-black-200  focus:border-secondary-200     text-white px-3 ${textInputStyle}`}
          value={value}
          placeholder={"Search for a video topic..."}
          placeholderTextColor={"#CDCDE0"}
        />

        <TouchableOpacity className="absolute right-3">
          <Image source={icons.search} className="h-6 w-6 " />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;

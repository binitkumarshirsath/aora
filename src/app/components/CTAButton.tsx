import { Text, TouchableOpacity } from "react-native";
import React from "react";

interface ClickToActionButtonProps {
  label: string;
  isLoading: boolean;
  btnStyles?: string;
  handlePress: () => void;
  textStyles?: string;
}

const ClickToActionButton = ({
  handlePress,
  isLoading,
  label,
  btnStyles,
  textStyles,
  ...props
}: ClickToActionButtonProps) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      onPress={handlePress}
      className={`h-12 bg-secondary-100  items-center flex justify-center p-2 rounded-lg  ${btnStyles} ${
        isLoading ? " opacity-50" : ""
      }`}
    >
      <Text className={` text-primary font-psemibold text-lg ${textStyles}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ClickToActionButton;

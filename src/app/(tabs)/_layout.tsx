import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constants/icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#161622",
          height: 75,
          borderTopWidth: 1,
          borderTopColor: "#232533",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,

          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              color={color}
              focused={focused}
              name="Home"
              icon={icons.home}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              color={color}
              focused={focused}
              name="Bookmark"
              icon={icons.bookmark}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              color={color}
              focused={focused}
              name="Create"
              icon={icons.plus}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              color={color}
              focused={focused}
              name="Profile"
              icon={icons.profile}
            />
          ),
        }}
      />
    </Tabs>
  );
};

const TabIcon = ({
  focused,
  color,
  name,
  icon,
}: {
  focused: boolean;
  color: string;
  name: string;
  icon: ImageSourcePropType;
}) => {
  return (
    <View className="justify-center items-center">
      <Image source={icon} resizeMode="contain" className="w-5 h-7" />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular "} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default TabsLayout;

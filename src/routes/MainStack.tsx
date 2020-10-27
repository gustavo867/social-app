import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Message from "../screens/Message";
import Notifications from "../screens/Notifications";
import Post from "../screens/Post";
import Profile from "../screens/Profile";

interface Props {
  focused: boolean;
}

const MainStack: React.FC = () => {
  const Main = createBottomTabNavigator();

  return (
    <Main.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "#222222",
          paddingBottom: 12,
          height: 60,
        },
      }}
    >
      <Main.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            let iconName = "ios-home";

            return (
              <Ionicons
                name={iconName}
                size={24}
                color={focused ? "#FFFF" : "#666666"}
              />
            );
          },
        }}
      />
      <Main.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({ focused }) => {
            let iconName = "ios-chatboxes";

            return (
              <Ionicons
                name={iconName}
                size={24}
                color={focused ? "#FFFF" : "#666666"}
              />
            );
          },
        }}
      />
      <Main.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: () => {
            let iconName = "ios-add-circle";

            return (
              <Ionicons
                name={iconName}
                size={48}
                color="#23a8d9"
                style={{
                  elevation: 20,
                  shadowColor: "#23a8d9",
                }}
              />
            );
          },
        }}
      />
      <Main.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => {
            let iconName = "ios-notifications";

            return (
              <Ionicons
                name={iconName}
                size={24}
                color={focused ? "#FFFF" : "#666666"}
              />
            );
          },
        }}
      />
      <Main.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            let iconName = "ios-person";

            return (
              <Ionicons
                name={iconName}
                size={24}
                color={focused ? "#FFFF" : "#666666"}
              />
            );
          },
        }}
      />
    </Main.Navigator>
  );
};

export default MainStack;

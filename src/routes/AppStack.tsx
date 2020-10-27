import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import Loading from "../screens/Loading";

export interface Context {
  username: string;
  email: string;
  uid: string;
  isLoggedIn: boolean | null;
  profilePhotoUrl: string;
}

const AppStack: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Main" component={MainStack} />
    </Stack.Navigator>
  );
};

export default AppStack;

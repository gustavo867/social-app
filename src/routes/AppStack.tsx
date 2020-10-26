import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { UserContext } from "../context/UserContext";

import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

export interface Context {
  username: string;
  email: string;
  uid: string;
  isLoggedIn: boolean | null;
  profilePhotoUrl: string;
}

const AppStack: React.FC = () => {
  const Stack = createStackNavigator();
  const [user] = useContext<any>(UserContext);

  return (
    <Stack.Navigator headerMode="none">
      {user.isLoggedIn ? (
        <Stack.Screen name="Main" component={MainStack} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default AppStack;

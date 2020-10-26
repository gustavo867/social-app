import { StatusBar } from "expo-status-bar";
import React from "react";
import Routes from "./src/routes/routes";

import { UserProvider } from "./src/context/UserContext";
import { FirebaseProvider } from "./src/context/FirebaseContext";

export default function App() {
  return (
    <FirebaseProvider>
      <UserProvider>
        <StatusBar style="light" />
        <Routes />
      </UserProvider>
    </FirebaseProvider>
  );
}

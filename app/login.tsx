import { AuthContext } from "@/contexts/authContext";
import React, { useContext } from "react";
import { Button, Text, View } from "react-native";

export default function LoginScreen() {
  const { logIn } = useContext(AuthContext);

  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title="Login" onPress={() => logIn()} />
    </View>
  );
}

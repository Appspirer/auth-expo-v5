import { AuthContext } from "@/contexts/authContext";
import React, { useContext, useState } from "react";
import { ActivityIndicator, Button, Text, View } from "react-native";

export default function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const { logIn } = useContext(AuthContext);

  const login = async () => {
    try {
      setLoading(true);
      await logIn();
    } catch (error) {
      console.log(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <>
          <Text>LoginScreen</Text>
          <Button title="Login" onPress={login} />
        </>
      )}
    </View>
  );
}

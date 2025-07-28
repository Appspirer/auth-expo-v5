import { AuthContext } from "@/contexts/authContext";
import { useContext } from "react";
import { Button, SafeAreaView, Text } from "react-native";

export default function HomeScreen() {
  const { logOut } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Text>Home screen</Text>
      <Button title="Logout" onPress={() => logOut()} />
    </SafeAreaView>
  );
}

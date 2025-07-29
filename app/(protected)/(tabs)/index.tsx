import { AuthContext } from "@/contexts/authContext";
import { useContext, useState } from "react";
import { ActivityIndicator, Button, SafeAreaView, Text } from "react-native";

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);
  const { logOut } = useContext(AuthContext);

  const logout = async () => {
    try {
      setLoading(true);
      await logOut();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator size={"large"} color={"red"} />
      ) : (
        <>
          <Text>Home screen</Text>
          <Button title="Logout" onPress={logout} />
        </>
      )}
    </SafeAreaView>
  );
}

import { AuthContext } from "@/contexts/authContext";
import { Redirect, Stack, useRouter } from "expo-router";
import React, { useContext } from "react";

export default function ProtectedLayout() {
  const { isLoggedIn } = useContext(AuthContext);

  const router = useRouter();

  if (isLoggedIn == null) {
    return null;
  }

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

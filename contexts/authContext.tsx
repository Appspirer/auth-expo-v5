import { login, logout } from "@/api";
import { removeUserInfo, setUserInfo } from "@/utils/secureStore";
import { router } from "expo-router";
import { createContext, PropsWithChildren, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  logIn: async () => {},
  logOut: async () => {},
});

export default function AuthProvider({ children }: PropsWithChildren) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = async () => {
    try {
      // API login
      const userInfo = await login();

      // Store user info
      await setUserInfo(userInfo);

      setIsLoggedIn(true);
      router.replace("/");
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  const logOut = async () => {
    try {
      // API logout
      await logout();

      // Remove user info
      await removeUserInfo();

      setIsLoggedIn(false);
      router.replace("/login");
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

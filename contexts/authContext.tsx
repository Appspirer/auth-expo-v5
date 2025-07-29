import { login, logout } from "@/api";
import { getUserInfo, removeUserInfo, setUserInfo } from "@/utils/secureStore";
import { router, SplashScreen } from "expo-router";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

type AuthContextType = {
  isLoggedIn: boolean | null;
  logIn: () => Promise<void>;
  logOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: null,
  logIn: async () => {},
  logOut: async () => {},
});

export default function AuthProvider({ children }: PropsWithChildren) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  // Get user info
  const getUserInfoFromStorage = async () => {
    try {
      const userInfo = await getUserInfo();
      console.log("userInfo", userInfo);
      if (userInfo) {
        setIsLoggedIn(true);
      } else {
        throw new Error("UserInfo null");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Load user info
  useEffect(() => {
    getUserInfoFromStorage();
  }, []);

  useEffect(() => {
    if (isLoggedIn != null) {
      // Hide splashcreen
      SplashScreen.hideAsync();
    }
  }, [isLoggedIn]);

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

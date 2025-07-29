import { login } from "@/api";
import { router } from "expo-router";
import { createContext, PropsWithChildren, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  logIn: () => {},
  logOut: () => {},
});

export default function AuthProvider({ children }: PropsWithChildren) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = async () => {
    try {
      // API login
      const userInfo = await login();

      setIsLoggedIn(true);
      router.replace("/");
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  const logOut = () => {
    setIsLoggedIn(false);
    router.replace("/login");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

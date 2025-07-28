import { router } from "expo-router";
import { createContext, PropsWithChildren, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  logIn: () => {},
});

export default function AuthProvider({ children }: PropsWithChildren) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => {
    setIsLoggedIn(true);
    router.replace("/");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn }}>
      {children}
    </AuthContext.Provider>
  );
}

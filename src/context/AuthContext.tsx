import { getCurrentUser } from "@/lib/appwrite";
import { useContext, createContext, useState, useEffect } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: any;
  setUser: any;
};

const AuthContext = createContext<null | AuthContextType>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        setIsLoggedIn(true);
        console.log("User", { res });
        setUser(user);
      })
      .catch((err) => {
        setUser(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isLoggedIn,
        setIsLoggedIn,
        setUser,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Hook must be used inside AuthProvider");
  }
  return context;
};

export default AuthContextProvider;

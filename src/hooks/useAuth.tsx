import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface AuthContextValue {
  isAdmin: boolean;
  loading: boolean;
  signIn: (username: string, password: string) => boolean;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const KEY = "admin_session_v1";
const ADMIN_USER = "admin";
const ADMIN_PASS = "123456";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsAdmin(localStorage.getItem(KEY) === "1");
    setLoading(false);
  }, []);

  const signIn = (username: string, password: string) => {
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      localStorage.setItem(KEY, "1");
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const signOut = () => {
    localStorage.removeItem(KEY);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAdmin, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

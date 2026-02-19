import { useState, useContext, createContext, useMemo } from "react";

type AuthContextValue = {
  isAuthed: boolean;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthed, setIsAuthed] = useState(() => {
    return localStorage.getItem("authed") === "true";
  });

  const value = useMemo(
    () => ({
      isAuthed,
      login: () => {
        localStorage.setItem("authed", "true");
        setIsAuthed(true);
      },
      logout: () => {
        localStorage.setItem("authed", "false");
        setIsAuthed(false);
      },
    }),
    [isAuthed],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}

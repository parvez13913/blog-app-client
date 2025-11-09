"use client";

import { decodeToken, JwtPayload } from "@/lib/decodeToken";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<{ user: JwtPayload | null }>({ user: null });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<JwtPayload | null>(null);

  useEffect(() => {
    const decoded = decodeToken();
    setUser(decoded);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

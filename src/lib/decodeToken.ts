import { jwtDecode } from "jwt-decode";

export interface JwtPayload {
  payload: {
    userId: string;
  };
  email: string;
  role?: string;
  exp?: number;
  iat?: number;
}

export const decodeToken = (): JwtPayload | null => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    return decoded;
  } catch {
    return null;
  }
};

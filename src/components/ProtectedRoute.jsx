import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({children}) {
    // Lê o localStorage para o login sobreviver ao F5
}
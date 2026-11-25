import { createContext, useContext, useState } from "react"

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    // Lê do LocalStorage para o login sobreviver ao F5

    const [ user, setUser ] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("user"));
        } catch {
            return null;
        } 
     });
     
     const login = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
     };

     const logout = () => {
        setUser(null);
        localStorage.remoteItem("user");
     };

     return (
        <AuthContext.Provider value={{ user, login, logout}}>
            {{ children }}
        </AuthContext.Provider>
     )
}

export function useAuth() {
    return useContext(AuthContext);
}
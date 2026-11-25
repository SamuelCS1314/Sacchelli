import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function ProtectedRoute() {
    const { user } = useAuth();
    const location = useLocation();

    if (!user){
        // Guarda de onde veio pra voltar direto para o login
        return <Navigate to="/login" replace state={{ from: location}} />
    }

    return <Outlet />
}
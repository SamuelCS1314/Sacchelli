import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Usuarios from "./pages/Usuarios";
import Departamentos from "./pages/Departamentos";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    {/* Publica */}
                    <Route path="/login" element={<Login />} />

                    {/* Protegida */}
                    <Route element={<ProtectedRoute />}>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Navigate to="/usuarios" replace />} />
                            <Route path="usuarios" element={<Usuarios />} />
                            <Route path="departamentos" element={<Departamentos />} />
                        </Route>
                    </Route>

                    {/* Qualquer outra URL */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}
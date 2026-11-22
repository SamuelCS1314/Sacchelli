import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Usuarios from "./pages/Usuarios";
import Departamentos from "./pages/Departamentos";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to="/usuarios" replace />} />
                    <Route path="usuarios" element={<Usuarios />} />
                    <Route path="departamentos" element={<Departamentos />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
    return (
        <div className="d-flex vh-100">
            <Sidebar />

            <div className="d-flex flex-column flex-grow-1">
                <Header />

                <main className="flex-grow-1 p-4 overflow-auto bg-light">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
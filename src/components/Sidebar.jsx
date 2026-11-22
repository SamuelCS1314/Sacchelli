import {
    Nav,
    Accordion,
} from "react-bootstrap";
import { NavLink } from 'react-router-dom'
import { PeopleFill, Building } from "react-bootstrap-icons";
import './style/Sidebar.css'
import logo_negativa from "../assets/logo_sacchelli_negativa.svg"

export default function Sidebar() {
    return (
        <aside className="h-100  bg-dark overflow-auto" style={{ width: "15%" }}>
            <div className="text-center mb-3 mt-3">
                <img src={logo_negativa} alt="Logo Empresa" img-fluid style={{width: "90%"}} />
            </div>
            <Accordion flush defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Usarios</Accordion.Header>
                    <Accordion.Body className="p-0">
                        <Nav className="flex-column sidebar-nav">
                            <Nav.Link as={NavLink} to="/usuarios" className="d-flex align-items-center gap-2 text-white ps-4">
                                <PeopleFill size={18} /> Usuarios
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/departamentos" className="d-flex align-items-center gap-2 text-white ps-4">
                                <Building size={18} /> Departamentos
                            </Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </aside >
    );
}
import {    
  Nav,
  Accordion,
} from "react-bootstrap";
import { NavLink } from 'react-router-dom'
import './style/Sidebar.css'

export default function Sidebar() {
    return (
        <aside className="h-100  bg-dark overflow-auto" style={{ width: "15%" }}>
            <div>
                <img src="" alt="Logo Empresa" style={{color: "white"}} />
            </div>
            <Accordion flush defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Usarios</Accordion.Header>
                    <Accordion.Body>
                        <Nav.Link as={NavLink} to="/usuarios" className="text-white">
                            Usuarios
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/departamentos" className="text-white">
                            Departamentos
                        </Nav.Link>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </aside >
    );
}
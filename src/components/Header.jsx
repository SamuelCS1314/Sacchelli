import { Nav, Navbar, Container } from 'react-bootstrap'
import './style/Header.css'

export default function Header() {
    return (
        <Navbar className="border-bottom header" style={{ height: "12%" }}>
            <Container fluid>
                <Navbar.Brand className="fw-bold "><h3>Sacchelli - Painel Administrativo</h3></Navbar.Brand>
            </Container>
        </Navbar>
    )
}
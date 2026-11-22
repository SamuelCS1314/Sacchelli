import { Nav, Navbar, Container } from 'react-bootstrap'

export default function Header() {
    return (
        <Navbar bg="white" className="border-bottom">
            <Container fluid>
                <Navbar.Brand>Painel Administrativo</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
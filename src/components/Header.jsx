import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import './style/Header.css'
import { useAuth } from "../context/AuthContext"

export default function Header() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login", { replace: true })
    }

    return (
        <Navbar className="border-bottom header" style={{ height: "12%" }}>
            <Container fluid>
                <Navbar.Brand className="fw-bold "><h3>Sacchelli - Painel Administrativo</h3></Navbar.Brand>


                <div className="d-flex align-itens-center gap-2">
                    <small className='text-muted'>{user?.nome}</small>
                    <Button variant='outline-danger' size='sm' onClick={handleLogout}>
                        Logout
                    </Button>
                </div>
            </Container>


        </Navbar>
    )
}
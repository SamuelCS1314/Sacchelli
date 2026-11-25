import { useState } from "react"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const { user, login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    const destino = location.state?.from?.pathname || "/usuarios";

    // Se já está logado não faz sentido ver a tela de Login
    if (user) return <Navigate to={destino} replace />

    const handleSubmit = (e) => {
        e.preventDefault();
        setErro("");

        // Trocar por uma chamada da sua real API
        if (email == "samuelcs1314@gmail.com" && senha == "123456") {
            login({ email, nome: "Samuel" });
            navigate(destino, { replace: true });
        } else {
            setErro("E-mail ou senha invalidos")
        }
    };
}

return (
    <div className="d-flex vh-100 align-itens-center justify-content-center bg-light">
        <Card style={{ width: 360 }} className="shadow-sm">
            <Card.Body className="p-4">
                <h4 className="text-center mb-4">Entrar</h4>

                {erro && <Alert variant="danger">{erro}</Alert>}

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlID="email">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            type="emial"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="senha">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            type="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button type="submit" className="w-100">
                        Entrar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    </div>
)
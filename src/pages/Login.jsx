import { useState } from "react"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import { InputGroup, Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import background_login from "../assets/background_login.svg"

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
        if (email == "testeadm@gmail.com" && senha == "123456") {
            login({ email, nome: "Samuel" });
            navigate(destino, { replace: true });
        } else {
            setErro("E-mail ou senha invalidos")
        }
    };

    const [verSenha, setVerSenha] = useState(false);

    return (
        <main className="d-flex vh-100">
            {/* Esquerda 50% */}
            <div className="w-50 d-none d-md-flex align-items-center justify-content-center bg-dark text-white" width={{ widht: "50%" }} id="Image">
                <img src={background_login} alt="Error" className="w-100 h-100" style={{ objectFit: "cover" }}/>
            </div>

            {/*  Direita 50% */}
            <div className=" w-50 d-flex align-items-center justify-content-center bg-light">
                <Card className="shadow-sm" style={{ width: 360 }}>
                    <Card.Body className="p-4">
                        <h4 className="text-center mb-4">Entrar</h4>

                        {erro && <Alert variant="danger">{erro}</Alert>}

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 pb-4" controlID="email">
                                <InputGroup>
                                    <InputGroup.Text>
                                        <FaEnvelope />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder="E-mail">
                                    </Form.Control>
                                </InputGroup>

                                <Form.Group className="mb-4 pt-4" controlId="senha">
                                    <InputGroup>
                                        <InputGroup.Text>
                                            <FaLock />
                                        </InputGroup.Text>
                                        <Form.Control
                                            type={verSenha ? "text" : "password" }
                                            value={senha}
                                            onChange={(e) => setSenha(e.target.value)}
                                            required
                                            placeholder="Senha"
                                        />
                                        <InputGroup.Text
                                            role="button"
                                            onClick={() => setVerSenha((v) => !v )}>
                                            {verSenha ? <FaEyeSlash /> : <FaEye/> }        

                                        </InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Group>

                            <Button type="submit" className="w-100">
                                Entrar
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </main >
    )
}
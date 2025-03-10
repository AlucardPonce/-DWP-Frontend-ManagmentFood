import { Form, Input, Button, Card, Typography, message } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles";

const { Title } = Typography;

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState("");
    const navigate="";
    const onFinish = (values) => {
        setLoading(true);
        setFormError("");

        setTimeout(() => {
            if (values.username === "admin" && values.password === "123456") {
                message.success("Inicio de sesión exitoso");
                navigate("/");
            } else {
                setFormError("Credenciales incorrectas");
            }
            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        document.body.style.margin = "0";
        document.documentElement.style.height = "100%";
        document.body.style.height = "100%";
    }, []);

    return (
        <div style={styles.container}>
            <Card style={styles.card} bordered={false}>
                <Title level={2} style={{ textAlign: "center", color: "#333" }}>
                    Iniciar Sesión
                </Title>

                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        label="Usuario"
                        name="username"
                        rules={[{ required: true, message: "Por favor, ingrese su usuario" }]}
                        validateStatus={formError ? "error" : ""}
                        help={formError && formError}
                    >
                        <Input placeholder="Usuario" />
                    </Form.Item>

                    <Form.Item
                        label="Contraseña"
                        name="password"
                        rules={[
                            { required: true, message: "Ingrese su contraseña" },
                            { min: 6, message: "Debe tener al menos 6 caracteres" },
                        ]}
                        validateStatus={formError ? "error" : ""}
                        help={formError && formError}
                    >
                        <Input.Password placeholder="Contraseña" />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            loading={loading}
                            style={styles.button}
                        >
                            Iniciar Sesión
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default LoginPage;
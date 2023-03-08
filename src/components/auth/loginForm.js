// import '../../styles/login.css';
import { Container, Row, Card, Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { setAuthToken } from '../../bin/setAuthToken';

const LoginForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9000/api/login', {
                username: userName,
                password: password
            }, { withCredentials: true });
            const accessToken = response.data.accessToken;
            localStorage.setItem('accessToken', accessToken);
            navigate('/izin');
        } catch (err) {
           console.log(err);
        }
    }

    return (
        <section className="py-4 py-xl-5">
            <Container className="py-5">
                <Row className="d-flex justify-content-center">
                    <div className="col-md-6 col-xl-4">
                        <Card>
                            <Card.Body className="d-flex d-flex flex-column align-items-center">
                                <div className="my-3">
                                    <h2>Login</h2>
                                </div>
                                <Form className="text-center w-100 px-2" method="post" onSubmit={Auth}>
                                    <div className="mb-3">
                                        <Form.Control type="text" name="username" value={userName} placeholder="Nama Pengguna" autoComplete="on" onChange={(e) => setUserName(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <Form.Control type="password" name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <Button variant="warning" className="d-block w-100 text-light fw-semibold" type="submit">Masuk</Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default LoginForm;
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarSiswa = () => {
    const navigate = useNavigate();

    const logout = async (e) => {
        try {
            await axios.get('http://localhost:9000/api/logout', {
                withCredentials: true,
                credentials: 'include'
            });
            localStorage.removeItem('accessToken');
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Navbar bg="dark" expand="md" sticky="top" className="py-3">
            <Container>
                <Navbar.Toggle aria-controls="collapse navbar-collapse" className="bg-warning my-2 "/>
                <Navbar.Collapse id="collapse navbar-collapse">
                    <Nav className="me-auto">
                        <Nav.Item className="bg-warning rounded-2 mx-2 px-3">
                            <Nav.Link className="text-white" href="/izin">Pengajuan Izin</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="rounded-2 mx-2 px-3">
                            <Nav.Link className="text-white" href="/izin/riwayat">Riwayat Izin</Nav.Link>
                        </Nav.Item>
                        <Nav.Link className="text-white" onClick={logout}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default NavbarSiswa;
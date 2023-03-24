import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarSiswa = () => {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const activePath = location.pathname;

        switch (activePath) {
            case '/siswa/izin':
                setActiveIndex(0)
                break;
            case '/siswa/riwayat':
                setActiveIndex(1)
                break;
            default:
                setActiveIndex(null)
        }
    }, [location]);

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
                <Navbar.Toggle aria-controls="collapse navbar-collapse" className="bg-warning my-2 " />
                <Navbar.Collapse id="collapse navbar-collapse">
                    <Nav className="me-auto">
                        <Nav.Item className={activeIndex === 0 ? 'bg-warning rounded-2 mx-3 px-3' : ''}>
                            <Link to='/siswa/izin' className="text-white nav-link">Pengajuan Izin</Link>
                        </Nav.Item>
                        <Nav.Item className={activeIndex === 1 ? 'bg-warning rounded-2 mx-3 px-3' : ''}>
                            <Link to='/siswa/riwayat' className="text-white nav-link">Riwayat Izin</Link>
                        </Nav.Item>
                        <Nav.Link className="text-white" onClick={logout}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default NavbarSiswa;
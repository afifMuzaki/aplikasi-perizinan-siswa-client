import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams} from 'react-router-dom';

const SideBar = ({ status }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const location = useLocation();
    const { id } = useParams();

    useEffect(() => {
        const activePath = location.pathname;

        switch (activePath) {
            case `/${status}/permintaan-izin`:
                setActiveIndex(0);
                break;
            case `/${status}/permintaan-izin/detail/${id}`:
                setActiveIndex(0);
                break;
            case `/${status}/rekap-izin`:
                setActiveIndex(1);
                break;
            case `/petugas/izin/detail`:
                setActiveIndex(1);
                break;
            default:
                setActiveIndex(null);
        }
    }, [location, status, id])

    return (
        <nav className="navbar navbar-dark bg-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 a1">
            <div className="container-fluid d-flex flex-column p-0">
                <Link className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0">
                    <div className="sidebar-brand-text mx-3">
                        <span>sipsis</span>
                    </div>
                </Link>
                <hr className="sidebar-divider my-0" />
                <ul className="navbar-nav text-light" id="accordionSidebar">
                    {/* <li className="nav-item">
                        <Link className="nav-link" to={`/${status}/dashboard`}>
                            <i className="fas fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li> */}
                    <li className={activeIndex === 0 ? 'nav-item fw-bold text-white bg-warning rounded-2' : 'nav-item'}>
                        <Link className="nav-link" to={`/${status}/permintaan-izin`}>
                            <i className="fas fa-user"></i>
                            <span>Permintaan Izin</span>
                        </Link>
                    </li>
                    <li className={activeIndex === 1 ? 'nav-item fw-bold text-white bg-warning rounded-2' : 'nav-item'}>
                        <Link className="nav-link" to={`/${status}/rekap-izin`}>
                            <i className="fas fa-table"></i>
                            <span>Rekap</span>
                        </Link>
                    </li>
                </ul>
                <div className="text-center d-none d-md-inline">
                    <button className="btn rounded-circle border-0" id="sidebarToggle" type="button">
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default SideBar;
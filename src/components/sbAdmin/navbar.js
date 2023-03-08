import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
            <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars"></i></button>
                <ul className="navbar-nav flex-nowrap ms-auto">
                    <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i className="fas fa-search"></i></a>
                        <div className="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                            <form className="me-auto navbar-search w-100">
                                <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                                    <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                                </div>
                            </form>
                        </div>
                    </li>
                    <li className="nav-item dropdown no-arrow">
                        <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="d-none d-lg-inline me-2 text-dark">Guru1</span></a>
                            <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in"><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Logout</a></div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
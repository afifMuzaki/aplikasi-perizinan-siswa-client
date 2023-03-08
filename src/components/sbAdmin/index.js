import React from "react";
import Footer from "./footer";
import Dashboard from "./guruContent/dashboard";
import PermintaanIzin from "./guruContent/permintaanIzin";
import RekapIzin from "./guruContent/rekapIzin";
import Navbar from "./navbar";
import SideBar from "./sidebar";

const Index = () => {
    return (
        <div id="page-top">
            <div id="wrapper">
            {/* Sidebar*/}
                <SideBar/>
            {/* Sidebar */}
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        {/* Navbar */}
                        <Navbar/>
                        {/* Navbar */}
                        {/* Conntent */}
                        {/* <Dashboard/> */}
                        {/* <PermintaanIzin/> */}
                        <RekapIzin/>
                        {/* Conntent */}
                    </div>
                    {/* Footer */}
                    <Footer/>
                    {/* Footer */}
                </div>
                <a className="border rounded d-inline scroll-to-top" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>
            </div>
        </div>
    );
};

export default Index;
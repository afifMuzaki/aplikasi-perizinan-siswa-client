import React from "react";
import SideBar from "../templateLayout/sidebar";
import Footer from "../templateLayout/footer";
import Header from "../templateLayout/header";
import RekapIzinContent from "./content/rekapIzinContent";

const RekapIzinGuru = () => {
    return (
        <div id="page-top">
            <div id="wrapper">
                {/* Sidebar*/}
                <SideBar status='guru'/>
                {/* Sidebar */}
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        {/* Navbar */}
                        <Header/>
                        {/* Navbar */}
                        {/* Conntent */}
                        <RekapIzinContent/>
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

export default RekapIzinGuru;
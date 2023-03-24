import React, {useState, useEffect} from "react";
import jwtDecode from 'jwt-decode';
import SideBar from "../templateLayout/sidebar";
import Footer from "../templateLayout/footer";
import Header from "../templateLayout/header";
import DetailIzin from "../contents/petugasContent/detailIzin";

const DetailIzinPetugas = () => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const decode = jwtDecode(accessToken);
        setUserName(decode.userName)
    }, []);

    return (
        <div id="page-top">
            <div id="wrapper">
                {/* Sidebar*/}
                <SideBar status='petugas'/>
                {/* Sidebar */}
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        {/* Navbar */}
                        <Header userName={userName}/>
                        {/* Navbar */}
                        {/* Conntent */}
                        <DetailIzin/>
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

export default DetailIzinPetugas;
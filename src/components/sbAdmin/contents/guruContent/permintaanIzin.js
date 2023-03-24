import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PermintaanIzin = () => {
    const [dataIzinReq, setIzinReq] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');

        axios.get('http://localhost:9000/api/guru/izins/request', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(response => {
            if (response.data[0].status === 'tidak ada') {
                setIsEmpty(true)
                setMessage(response.data[0].message)
            }
            setIzinReq(response.data);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    if (isEmpty === true) {
        return (
            <div className="container-fluid">
                <h3 className="text-dark mb-2">Permintaan Izin</h3>
                <div className="row justify-content-center">
                    <div className="alert alert-successs col-3 alert-dismissible shadow" role="alert">
                        <p className="text-success text-center fw-semibold">{message}</p>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container-fluid">
                <h3 className="text-dark mb-2">Permintaan Izin</h3>
                <div className="row">
                    {dataIzinReq.map(item => (
                        <div key={item.id} className="col-md-4 col-12 my-3 permintaan">
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h4 className="d-inline text-truncate">{item.transaksiIzin.izinSiswa.nama}</h4>
                                    <span className="d-inline mx-2">|</span>
                                    <p className="d-inline">{`${item.transaksiIzin.izinSiswa.siswaKelas.kelas} ${item.transaksiIzin.izinSiswa.siswaKelas.kelasJurusan.jurusan} ${item.transaksiIzin.izinSiswa.siswaKelas.rombel}`}</p>
                                </div>
                                <div className="card-body text-dark">
                                    <p className="text-end">{item.transaksiIzin.tggl}</p>
                                    <p className="card-text">{item.transaksiIzin.alasan}</p>
                                    <Link to={`/guru/permintaan-izin/detail/${item.id}`} className="btn btn-primary float-end" type="button">Lihat</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};

export default PermintaanIzin;
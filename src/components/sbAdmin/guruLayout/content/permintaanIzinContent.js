import React, { useState, useEffect } from "react";
import axios from "axios";

const PermintaanIzinContentGuru = () => {
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

    const sendStatus = (status, idTrans) => {
        const accessToken = localStorage.getItem('accessToken');

        axios.post('http://localhost:9000/api/guru/izins/verify', {
            status,
            idTrans
        }, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(response => {
            console.log(response.data);
        })
    }

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
                                    <h4 className="d-inline">{item.transaksiIzin.izinSiswa.nama}</h4>
                                    <span className="d-inline mx-2">|</span>
                                    <p className="d-inline">{`${item.transaksiIzin.izinSiswa.siswaKelas.kelas} ${item.transaksiIzin.izinSiswa.siswaKelas.kelasJurusan.jurusan} ${item.transaksiIzin.izinSiswa.siswaKelas.rombel}`}</p>
                                </div>
                                <div className="card-body text-dark">
                                    <p className="text-end">{item.transaksiIzin.tggl}</p>
                                    <p className="card-text">{item.transaksiIzin.alasan}</p>
                                    <button className="btn btn-primary float-end" type="button" data-bs-toggle="modal" data-bs-target={`#modal-${item.id}`}>Lihat</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {dataIzinReq.map(item => (
                    <div key={item.id} className="modal fade" role="dialog" tabindex="-1" id={`modal-${item.id}`}>
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header text-dark">
                                    <h4 className="modal-title">Detail Perizinan</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="col-12">
                                        <p clkbass="text-end">{item.transaksiIzin.tggl}</p>
                                    </div>
                                    <div className="col-12 my-2"><label className="form-label fw-semibold">Nama Siswa :</label>
                                        <input type="text" className="form-control" disabled value={item.transaksiIzin.izinSiswa.nama} />
                                    </div>
                                    <div className="col-12 my-2"><label className="form-label fw-semibold">NIS Siswa :</label>
                                        <input type="text" className="form-control" disabled value={item.transaksiIzin.siswaNis} />
                                    </div>
                                    <div className="col-12 my-2"><label className="form-label fw-semibold">Kelas :</label>
                                        <input type="text" className="form-control" disabled value={`${item.transaksiIzin.izinSiswa.siswaKelas.kelas} ${item.transaksiIzin.izinSiswa.siswaKelas.kelasJurusan.jurusan} ${item.transaksiIzin.izinSiswa.siswaKelas.rombel}`} />
                                    </div>
                                    <div className="col-12 my-2"><label className="form-label fw-semibold">Waktu Izin :</label>
                                        <div className="col-12">
                                            <span className="fs-4 mx-3">{item.transaksiIzin.waktu_izin}</span>
                                            <span className="fs-5">s/d</span>
                                            <span className="fs-4 mx-3">{item.transaksiIzin.waktu_kembali}</span></div>
                                    </div>
                                    <div className="col-12 my-2"><label className="form-label fw-semibold">Mata Pelajaran yang Ditinggalkan :</label>
                                        <div className="col-12">
                                            <p>Mapel 1 : {item.transaksiIzin.mapel}</p>
                                        </div>
                                    </div>
                                    <div className="col-12 my-2"><label className="form-label fw-semibold">Alasan Izin</label>
                                        <input className="form-control-lg form-control" type="text" disabled="" value={item.transaksiIzin.alasan} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-primary" onClick={() => sendStatus('Disetujui', item.id)} type="button">Setujui</button>
                                    <button className="btn btn-danger" onClick={() => sendStatus('Ditolak', item.id)} type="button">Tolak</button>
                                    <button className="btn btn-light" type="button" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default PermintaanIzinContentGuru;
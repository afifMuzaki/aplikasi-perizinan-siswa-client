import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const RekapIzin = ({ userName }) => {
    const [dataRekap, setDataRekap] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');

        axios.get('http://localhost:9000/api/petugas/izins/history', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(response => {
            setDataRekap(response.data);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    const getStatus = (izin_guru, izin_petugas) => {
        if (izin_guru === 'Ditolak' || izin_petugas === 'Ditolak') {
            return 'Ditolak';
        } else if (izin_guru === 'Proses' || izin_petugas === 'Proses') {
            return 'Proses';
        } else {
            return 'Disetujui';
        }
    }

    const handleDetail = () => {
        navigate('/petugas/izin/detail')
    }

    return (
        <div className="container-fluid">
            <h3 className="text-dark mb-4">Rekap Perizinan {userName}</h3>
            <div className="card shadow">
                <div className="card-header py-3">
                    <p className="text-primary m-0 fw-bold">Data Perizinan Siswa</p>
                </div>
                <div className="card-body">
                    <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                        <table className="table table-striped table-hover table-bordered my-0" id="dataTable">
                            <thead>
                                <tr>
                                    <th className="text-center">Nama</th>
                                    <th className="text-center">Kelas</th>
                                    <th className="text-center">Tanggal</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Mengetahui Guru</th>
                                    <th className="text-center">Mengetahui Petugas</th>
                                    <th className="text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataRekap.map(item => (
                                    <tr key={item.id}>
                                        <td className="text-center">{item.transaksiIzin.izinSiswa.nama}</td>
                                        <td className="text-center">{`${item.transaksiIzin.izinSiswa.siswaKelas.kelas} ${item.transaksiIzin.izinSiswa.siswaKelas.kelasJurusan.jurusan} ${item.transaksiIzin.izinSiswa.siswaKelas.rombel}`}</td>
                                        <td className="text-center">{item.transaksiIzin.tggl}</td>
                                        <td className="text-center">{getStatus(item.izin_guru, item.izin_petugas)}</td>
                                        <td className="text-center">{item.transaksiGuru.nama}</td>
                                        <td className="text-center">{item.transaksiPetugas.nama}</td>
                                        <td className="text-center">
                                            <button className="btn btn-warning mx-2 text-white" type="button" onClick={handleDetail}>Detail</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th className="text-center">Nama</th>
                                    <th className="text-center">Kelas</th>
                                    <th className="text-center">Tanggal</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Mengetahui Guru</th>
                                    <th className="text-center">Mengetahui Petugas</th>
                                    <th className="text-center">Aksi</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RekapIzin;
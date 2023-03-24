import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

const RekapIzin = ({ userName }) => {
    const [dataRekap, setDataRekap] = useState([]);
    const [dataIzin, setDataIzin] = useState({});
    const [show, setShow] = useState(false);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');

        axios.get('http://localhost:9000/api/guru/izins/history', {
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

    const getPetugas = (petugas) => {
        if (petugas === null) return 'Menunggu...';
        if (petugas) return petugas.nama;
    }

    const handleClose = () => setShow(false);

    const handleShow = (item) => {
        setDataIzin(item);
        setShow(true);
    }

    const jsonToArr = (json) => {
        const arr = JSON.parse(json);
        return arr.mapel.map((option, index) => (
            <p key={index}>- Mapel {index + 1}: {option}</p>
        ));
    };

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
                                        <td className="text-center">{getPetugas(item.transaksiPetugas)}</td>
                                        <td className="text-center">
                                            <button className="btn btn-warning mx-2 text-white" type="button" data-bs-toggle="modal" onClick={() => handleShow(item)}>Detail</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* {dataRekap.map(item => (
                <div className="modal fade" role="dialog" key={item.id} tabIndex="-1" id={`modal-${item.id}`}>
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-dark">
                                <h4 className="modal-title">Detail Rekap Perizinan</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="col-12 my-2">
                                    <label className="form-label fw-semibold">Nama Siswa :</label>
                                    <input type="text" className="form-control" disabled value={item.transaksiIzin.izinSiswa.nama} />
                                </div>
                                <div className="col-12 my-2">
                                    <label className="form-label fw-semibold">NIS Siswa :</label>
                                    <input type="text" className="form-control" disabled value={item.transaksiIzin.siswaNis} />
                                </div>
                                <div className="col-12 my-2">
                                    <label className="form-label fw-semibold">Kelas :</label>
                                    <input type="text" className="form-control" disabled value={`${item.transaksiIzin.izinSiswa.siswaKelas.kelas} ${item.transaksiIzin.izinSiswa.siswaKelas.kelasJurusan.jurusan} ${item.transaksiIzin.izinSiswa.siswaKelas.rombel}`} />
                                </div>
                                <div className="col-12 my-2">
                                    <label className="form-label fw-semibold">Waktu dan Tanggal Izin</label>
                                    <div className="col-12">
                                        <input type="text" className="form-control" disabled value={item.transaksiIzin.tggl} />
                                        <span className="fs-4 mx-3">{item.transaksiIzin.waktu_izin}</span>
                                        <span className="fs-5">s/d</span>
                                        <span className="fs-4 mx-3">{item.transaksiIzin.waktu_kembali}</span>
                                    </div>
                                </div>
                                <div className="col-12 my-2">
                                    <label className="form-label fw-semibold">Alasan Izin</label>
                                    <input className="form-control-lg form-control" type="text" disabled value={item.transaksiIzin.alasan}/>
                                </div>
                                <div className="col-12 my-2">
                                    <label className="form-label fw-semibold">Status</label>
                                    <input className="form-control-lg form-control" type="text" disabled value={getStatus(item.izin_guru, item.izin_petugas)} />
                                </div>
                                <div className="col-12 my-2">
                                    <label className="form-label fw-semibold">Mengetahui Guru</label>
                                    <input className="form-control-lg form-control" type="text" disabled value={item.transaksiGuru.nama} />
                                    <div className="col-12 my-2">
                                        <label className="form-label fw-semibold">Catatan Guru</label>
                                        <textarea className="form-control" value={item.catatan_guru} />
                                    </div>
                                </div>
                                <div className="col-12 my-2">
                                    <label className="form-label fw-semibold">Mengetahui Petugas</label>
                                    <input className="form-control-lg form-control" type="text" disabled value={getPetugas(item.transaksiPetugas)} />
                                </div>
                                <div className="col-12 my-2">
                                    <label className="form-label fw-semibold">Catatan Petugas</label>
                                    <textarea className="form-control" value={item.catatan_petugas} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-light" type="button" data-bs-dismiss="modal">Tutup</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))} */}
            {show && (
                <Modal backdrop='static' size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Detail Rekap Perizinan</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="col-12 my-2">
                            <label className="form-label fw-semibold">Nama Siswa :</label>
                            <input type="text" className="form-control" disabled value={dataIzin.transaksiIzin.izinSiswa.nama} />
                        </div>
                        <div className="col-12 my-2">
                            <label className="form-label fw-semibold">NIS Siswa :</label>
                            <input type="text" className="form-control" disabled value={dataIzin.transaksiIzin.siswaNis} />
                        </div>
                        <div className="col-12 my-2">
                            <label className="form-label fw-semibold">Kelas :</label>
                            <input type="text" className="form-control" disabled value={`${dataIzin.transaksiIzin.izinSiswa.siswaKelas.kelas} ${dataIzin.transaksiIzin.izinSiswa.siswaKelas.kelasJurusan.jurusan} ${dataIzin.transaksiIzin.izinSiswa.siswaKelas.rombel}`} />
                        </div>
                        <div className="col-12 my-2">
                            <label className="form-label fw-semibold">Waktu dan Tanggal Izin</label>
                            <div className="col-12">
                                <input type="text" className="form-control" disabled value={dataIzin.transaksiIzin.tggl} />
                                <span className="fs-4 mx-3">{dataIzin.transaksiIzin.waktu_izin}</span>
                                <span className="fs-5">s/d</span>
                                <span className="fs-4 mx-3">{dataIzin.transaksiIzin.waktu_kembali}</span>
                            </div>
                        </div>
                        <div className="col-12 my-2">
                            <label className="form-label fw-semibold">Alasan Izin</label>
                            <input className="form-control-lg form-control" type="text" disabled value={dataIzin.transaksiIzin.alasan} />
                        </div>
                        <div className="col-12 my-2">
                            <label className="form-label fw-semibold">Status</label>
                            <input className="form-control-lg form-control" type="text" disabled value={getStatus(dataIzin.izin_guru, dataIzin.izin_petugas)} />
                        </div>
                        <div className="col-12 my-2">
                            <label className="form-label fw-semibold">Mengetahui Guru</label>
                            <input className="form-control-lg form-control" type="text" disabled value={dataIzin.transaksiGuru.nama} />
                            <div className="col-12 my-2">
                                <label className="form-label fw-semibold">Catatan Guru</label>
                                <textarea className="form-control" disabled value={dataIzin.catatan_guru} />
                            </div>
                        </div>
                        <div className="col-12 my-2">
                            <label className="form-label fw-semibold">Mengetahui Petugas</label>
                            <input className="form-control-lg form-control" type="text" disabled value={getPetugas(dataIzin.transaksiPetugas)} />
                        </div>
                        <div className="col-12 my-2">
                            <label className="form-label fw-semibold">Catatan Petugas</label>
                            <textarea className="form-control" disabled value={dataIzin.catatan_petugas} />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Tutup</Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
}

export default RekapIzin;
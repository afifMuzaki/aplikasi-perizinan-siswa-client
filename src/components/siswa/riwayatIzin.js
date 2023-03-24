import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Table, Button, Modal, ModalDialog, ModalHeader, ModalTitle, ModalBody, FormControl, FormLabel, ModalFooter } from "react-bootstrap";
import NavbarSiswa from "./navbar";

const RiwayatIzin = () => {
    const [dataIzin, setDataIzin] = useState([]);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');

        axios.get('http://localhost:9000/api/siswa/izins/history', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(response => {
            setDataIzin(response.data);
        }).catch(err => {
            console.log(err);
        })
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

    const jsonToArr = (json) => {
        const arrMapel = JSON.parse(json);
        return arrMapel.mapel.map((option, index) => (
            <p key={index}>- Mapel {index + 1}: {option}</p>
        ));
    }

    return (
        <div>
            <NavbarSiswa />
            <Container className="my-3 bg-white rounded-3">
                <h2 className="pt-2">Riwayat Izin Siswa</h2>
                <Row className="gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3 my-2">
                    <div className="col-xxl-12 col-12">
                        <Table responsive size="lg" className="mx-2">
                            <thead>
                                <tr>
                                    <th>Tanggal</th>
                                    <th>Alasan</th>
                                    <th>Mengetahui Guru</th>
                                    <th>Mengetahui Petugas</th>
                                    <th>Status</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataIzin.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.tggl}</td>
                                        <td className="text-truncate">{item.alasan}</td>
                                        <td>{item.izinTransaksi.transaksiGuru.nama}</td>
                                        <td>{getPetugas(item.izinTransaksi.transaksiPetugas)}</td>
                                        <td>{getStatus(item.izinTransaksi.izin_guru, item.izinTransaksi.izin_petugas)}</td>
                                        <td>
                                            <Button className="text-white mx-2" variant="warning" data-bs-toggle="modal" data-bs-target="#modal-1">Detail</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Row>
                {dataIzin.map(item => (
                    <div key={item.id} className="modal fade" role="dialog" tabIndex="-1" id="modal-1">
                        <ModalDialog className="modal-lg" role="document">
                            <div className="modal-content">
                                <ModalHeader className="modal-header">
                                    <ModalTitle>Izin Siswa</ModalTitle>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </ModalHeader>
                                <ModalBody>
                                    <div className="col-12">
                                        <p className="text-end">{item.tggl}</p>
                                    </div>
                                    <div className="col-12 my-2">
                                        <FormLabel className="fw-semibold">Nama Siswa :</FormLabel>
                                        <FormControl type="text" disabled value={item.izinSiswa.nama} />
                                    </div>
                                    <div className="col-12 my-2">
                                        <FormLabel className="fw-semibold">NIS Siswa :</FormLabel>
                                        <FormControl type="text" disabled value={item.izinSiswa.nis} />
                                    </div>
                                    <div className="col-12 my-2">
                                        <FormLabel className="fw-semibold">Kelas :</FormLabel>
                                        <FormControl type="text" disabled value={`${item.izinSiswa.siswaKelas.kelas} ${item.izinSiswa.siswaKelas.kelasJurusan.jurusan} ${item.izinSiswa.siswaKelas.rombel}`} />
                                    </div>
                                    <div className="col-12 my-2">
                                        <FormLabel className="fw-semibold">Guru Mapel :</FormLabel>
                                        <FormControl type="text" disabled value={item.izinTransaksi.transaksiGuru.nama} />
                                    </div>
                                    <div className="col-12 my-2">
                                        <FormLabel className="fw-semibold">Petugas Piket :</FormLabel>
                                        <FormControl type="text" disabled value={getPetugas(item.izinTransaksi.transaksiPetugas)} />
                                    </div>
                                    <div className="col-12 my-2">
                                        <FormLabel className="fw-semibold">Waktu Izin :</FormLabel>
                                        <div className="col-12">
                                            <span className="fs-4 mx-3">{item.waktu_izin}</span>
                                            <span className="fs-5">s/d</span>
                                            <span className="fs-4 mx-3">{item.waktu_kembali}</span>
                                        </div>
                                    </div>
                                    <div className="col-12 my-2">
                                        <FormLabel className="fw-semibold">Mata Pelajaran yang Ditinggalkan :</FormLabel>
                                        <div className="col-12">
                                            {jsonToArr(item.mapel)}
                                        </div>
                                    </div>
                                    <div className="col-12 my-2">
                                        <FormLabel className="fw-semibold">Alasan Izin</FormLabel>
                                        <FormControl className="form-control-lg" type="text" disabled value={item.alasan} />
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button className="btn-light" type="button" data-bs-dismiss="modal">Batal</Button>
                                </ModalFooter>
                            </div>
                        </ModalDialog>
                    </div>
                ))}
            </Container>
        </div>
    );
}

export default RiwayatIzin;
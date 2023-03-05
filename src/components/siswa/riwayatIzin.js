import React from "react";
import { Container, Row, Table, Button } from "react-bootstrap";
import NavbarSiswa from "./navbar";

const RiwayatIzin = () => {

    return (
        <div>
            <NavbarSiswa />
            <Container className="my-3 bg-white rounded-3">
                <h2 className="pt-2">Status Izin Siswa</h2>
                <Row className="gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3 my-2">
                    <div className="col-xxl-12 col-12">
                        <Table responsive className="mx-2">
                            <thead>
                                <tr>
                                    <th>Tanggal</th>
                                    <th>Alasan</th>
                                    <th>Mengetahui Guru</th>
                                    <th>Mengetahui Petugas</th>
                                    <th>Status</th>
                                    <th>Operasi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>18/02/2023</td>
                                    <td className="text-truncate">Sakit</td>
                                    <td>Guru1</td>
                                    <td>Petugas 1</td>
                                    <td>Disetujui</td>
                                    <td>
                                        <Button className="text-white mx-2" variant="warning" data-bs-toggle="modal" data-bs-target="#modal-detail-1">Detail</Button>
                                        <Button className="text-white mx-2" variant="success" data-bs-toggle="modal" data-bs-target="#modal-detail-1">Ubah</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default RiwayatIzin;
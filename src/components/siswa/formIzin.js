import NavbarSiswa from "./navbar";
import jwtDecode from 'jwt-decode';
import React, { useEffect } from "react";
import { Button, Container, Form, Row, Anchor } from "react-bootstrap";
import axios from "axios";

const FormIzin = () => {
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken};`
        console.log('token: ' + accessToken);
        const decodedToken = jwtDecode(accessToken);
        console.log(decodedToken);
    })

    return (
        <section>
            <NavbarSiswa />
            <Container className="bg-white my-3 rounded-3">
                <h2 className="pt-2">Pengajuan Izin Siswa</h2>
                <Form>
                    <Row>
                        <div className="col-12 col-md-6 my-3">
                            <Form.Label className="fw-semibold">Nama Siswa</Form.Label>
                            <Form.Control type="text" disabled defaultValue="Siswa1" />
                        </div>
                        <div className="col-12 col-md-6 my-3">
                            <Form.Label className="fw-semibold">NIS Siswa</Form.Label>
                            <Form.Control type="text" disabled defaultValue="202004/096.45" />
                        </div>
                        <div className="col-12 col-md-6 my-3">
                            <Form.Label className="fw-semibold">Kelas</Form.Label>
                            <Form.Control type="text" disabled defaultValue="XII RPL B" />
                        </div>
                        <div className="col-12 col-md-6 my-3">
                            <Form.Label className="fw-semibold">Guru Mapel</Form.Label>
                            <Form.Select>
                                <optgroup label="This is a group">
                                    <option defaultValue="12">This is item 1</option>
                                    <option defaultValue="13">This is item 2</option>
                                    <option defaultValue="14">This is item 3</option>
                                </optgroup>
                            </Form.Select>
                        </div>
                        <div className="col-12 col-md-6 my-3">
                            <Form.Label className="fw-semibold">Waktu Izin</Form.Label>
                            <Form.Control type="time" />
                        </div>
                        <div className="col-12 col-md-6 my-3">
                            <Form.Label className="fw-semibold">Waktu Kembali</Form.Label>
                            <Form.Control type="time" />
                        </div>
                        <div className="col-12 col-md-6 my-3">
                            <Form.Label className="fw-semibold">Jenis Izin</Form.Label>
                            <Form.Select>
                                <optgroup label="This is a group">
                                    <option defaultValue="12">This is item 1</option>
                                    <option defaultValue="13">This is item 2</option>
                                    <option defaultValue="14">This is item 3</option>
                                </optgroup>
                            </Form.Select>
                        </div>
                        <div className="col-12 col-md-6 my-3">
                            <Form.Label className="fw-semibold">Mata Pelajaran yang Ditinggalkan</Form.Label>
                            <div className="d-inline">
                                <div className="my-2">
                                    <Form.Select className="w-75 d-inline me-2">
                                        <optgroup label="This is a group">
                                            <option value="12">This is item 1</option>
                                            <option value="13">This is item 2</option>
                                            <option value="14">This is item 3</option>
                                        </optgroup>
                                    </Form.Select>
                                    <Button variant="danger" className="d-inline text-white fw-semibold">-</Button>
                                </div>
                                <Anchor className="text-decoration-none text-success fw-semibold" href="#">+ Tambah Mapel</Anchor>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-3">
                            <Form.Label className="fw-semibold">Alasan Izin</Form.Label>
                            <Form.Control as="textarea" size="lg" />
                        </div>
                        <div className="col-12 my-3">
                            <Button variant="success" className="fw-semibold my-2 float-end" type="submit">Kirim</Button>
                        </div>
                    </Row>
                </Form>
            </Container>
        </section>
    );

}

export default FormIzin;
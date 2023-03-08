import NavbarSiswa from "./navbar";
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row, Anchor } from "react-bootstrap";
import axios from "axios";

const FormIzin = () => {
    const [dataSiswa, setDataSiswa] = useState([]);
    const [nis, setNis] = useState('');
    const [dataKategori, setDataKategori] = useState([]);
    const [dataGuru, setDataGuru] = useState([]);
    const [dataMapel, setDataMapel] = useState([]);

    const [guruMapel, setGuruMapel] = useState('');
    const [waktuIzin, setWaktuIzin] = useState('');
    const [waktuKembali, setWaktuKembali] = useState('');
    const [jenisIzin, setJenisIzin] = useState('');
    const [mapelIzin, setMapelIzin] = useState('');
    const [alasanIzin, setAlasanIzin] = useState('');

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken};`
        const decode = jwtDecode(accessToken);
        setNis(decode.userKredensial);

        axios.get('http://localhost:9000/api/siswa/identity', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(response => {
                setDataSiswa(response.data)
            }).catch(err => {
                console.log(err);
            });

        axios.get('http://localhost:9000/api/guru/all', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(response => {
                setDataGuru(response.data)
            }).catch(err => {
                console.log(err);
            });

        axios.get('http://localhost:9000/api/mapel/all', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(response => {
                setDataMapel(response.data)
            }).catch(err => {
                console.log(err);
            });

        axios.get('http://localhost:9000/api/kategori/all', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(response => {
                setDataKategori(response.data)
            }).catch(err => {
                console.log(err);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const accessToken = localStorage.getItem('accessToken');

        const mapels = {
            mapel1: mapelIzin
        };

        const mapelJson = JSON.stringify(mapels)
        
        axios.post('http://localhost:9000/api/siswa/izin', {
            kredensial: nis,
            nipGuru: guruMapel,
            idKategori: jenisIzin,
            pelajaran: mapelJson,
            alasanIzin: alasanIzin,
            waktuIzin: waktuIzin,
            waktuKembali: waktuKembali,
        }, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <section>
            <NavbarSiswa />
            <Container className="bg-white my-3 rounded-3">
                <h2 className="pt-2">Pengajuan Izin Siswa</h2>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <div className="col-12 col-md-6 my-3">
                            <Form.Label className="fw-semibold">Nama Siswa</Form.Label>
                            <Form.Control type="text" disabled defaultValue={dataSiswa.namaSiswa}/>
                        </div>
                        <div className="col-12 col-md-6 my-3">
                            <Form.Label className="fw-semibold">NIS Siswa</Form.Label>
                            <Form.Control type="text" disabled defaultValue={nis} />
                        </div>
                        <div className="col-12 col-md-6 my-3">
                            <Form.Label className="fw-semibold">Kelas</Form.Label>
                            <Form.Control type="text" disabled defaultValue={dataSiswa.kelasSiswa}/>
                        </div>
                        <div className="col-12 col-md-6 my-3">
                            <Form.Label className="fw-semibold">Guru Mapel</Form.Label>
                            <Form.Select value={guruMapel} onChange={(e) => setGuruMapel(e.target.value)}>
                                <optgroup label="Permintaan Izin Guru">
                                    <option>-</option>
                                    {dataGuru.map(item => (
                                        <option key={item.nip} value={item.nip}>{item.nama}</option>
                                    ))}
                                </optgroup>
                            </Form.Select>
                        </div>
                        <div className="col-12 col-md-6 my-3">
                            <Form.Label className="fw-semibold">Waktu Izin</Form.Label>
                            <Form.Control type="time" name="waktuIzin" value={waktuIzin} onChange={(e) => setWaktuIzin(e.target.value)} />
                        </div>
                        <div className="col-12 col-md-6 my-3">
                            <Form.Label className="fw-semibold">Waktu Kembali</Form.Label>
                            <Form.Control type="time" name="waktuKembali" value={waktuKembali} onChange={(e) => setWaktuKembali(e.target.value)}/>
                        </div>
                        <div className="col-12 col-md-6 my-3">
                            <Form.Label className="fw-semibold">Jenis Izin</Form.Label>
                            <Form.Select name="jenisIzin" value={jenisIzin} onChange={(e) => setJenisIzin(e.target.value)}>
                                <optgroup label="Jenis Izin">
                                    <option>-</option>
                                    {dataKategori.map(item => (
                                        <option key={item.id} value={item.id}>{item.kategori}</option>
                                    ))}
                                </optgroup>
                            </Form.Select>
                        </div>
                        <div className="col-12 col-md-6 my-3">
                            <Form.Label className="fw-semibold">Mata Pelajaran yang Ditinggalkan</Form.Label>
                            <div className="d-inline">
                                <div className="my-2">
                                    <Form.Select className="w-75 d-inline me-2" name="mapelIzin" value={mapelIzin} onChange={(e) => setMapelIzin(e.target.value)}>
                                        <optgroup label="Mata Pelajaran yang Ditinggalkan">
                                            <option>-</option>
                                            {dataMapel.map(item => (
                                                <option key={item.id} value={item.mapel}>{item.mapel}</option>
                                            ))}
                                        </optgroup>
                                    </Form.Select>
                                    <Button variant="danger" className="d-inline text-white fw-semibold">-</Button>
                                </div>
                                <Anchor className="text-decoration-none text-success fw-semibold" href="#">+ Tambah Mapel</Anchor>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-3">
                            <Form.Label className="fw-semibold">Alasan Izin</Form.Label>
                            <Form.Control as="textarea" size="lg" name="alasan" value={alasanIzin} onChange={(e) => setAlasanIzin(e.target.value)}/>
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
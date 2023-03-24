import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const DetailPerizinanGuru = () => {
    const [accessToken] = useState(localStorage.getItem('accessToken'));
    const [catatanGuru, setCatatanGuru] = useState('');
    const [namaSiswa, setNamaSiswa] = useState('');
    const [nisSiswa, setNisSiswa] = useState('');;
    const [kelas, setKelas] = useState('');
    const [jurusan, setJurusan] = useState('');
    const [rombel, setRombel] = useState('');
    const [waktuIzin, setWaktuIzin] = useState('');
    const [waktuKembali, setWaktuKembali] = useState('');
    const [alasan, setAlasan] = useState('');
    const [mapels, setMapels] = useState('');
    const [tggl, setTggl] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:9000/api/guru/izins/request/${id}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(response => {
            setNamaSiswa(response.data[0].transaksiIzin.izinSiswa.nama);
            setNisSiswa(response.data[0].transaksiIzin.siswaNis);
            setTggl(response.data[0].transaksiIzin.tggl)
            setKelas(response.data[0].transaksiIzin.izinSiswa.siswaKelas.kelas);
            setJurusan(response.data[0].transaksiIzin.izinSiswa.siswaKelas.kelasJurusan.jurusan);
            setRombel(response.data[0].transaksiIzin.izinSiswa.siswaKelas.rombel);
            setWaktuIzin(response.data[0].transaksiIzin.waktu_izin);
            setWaktuKembali(response.data[0].transaksiIzin.waktu_kembali);
            setAlasan(response.data[0].transaksiIzin.alasan);
            setMapels(JSON.parse(response.data[0].transaksiIzin.mapel));
        }).catch(err => console.error(err));

    }, [id, accessToken]);

    const jsonToArr = (json) => {
        return json?.mapel ? json.mapel.map((option, index) => (
            <p key={index}>- Mapel {index + 1}: {option}</p>
        )) : <p className="text-danger">Tidak ada data</p>
    };

    const handleConfirm = (status) => {
        axios.post('http://localhost:9000/api/guru/izins/verify', {
            status,
            idTrans: id,
            catatan: catatanGuru
        }, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(response => {
            window.alert(response.data.message);
            navigate('/guru/permintaan-izin');
        }).catch(err => console.log(err));
    }

    return (
        <div className="container-fluid">
            <h3 className="text-dark mb-2">Detail Perizinan</h3>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="text-primary d-inline m-0 fw-semibold">{namaSiswa}</h5>
                    <p className="float-end d-inline">{tggl}</p>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12 my-3">
                            <label className="form-label text-dark fw-semibold mb-0">Nama Siswa :</label>
                            <input className="form-control" type="text" disabled defaultValue={namaSiswa} />
                        </div>
                        <div className="col-6 my-3">
                            <label className="form-label text-dark fw-semibold mb-0">NIS Siswa :</label>
                            <input className="form-control" type="text" disabled defaultValue={nisSiswa} />
                        </div>
                        <div className="col-6 my-3">
                            <label className="form-label text-dark fw-semibold mb-0">Kelas :</label>
                            <input className="form-control" type="text" disabled value={`${kelas} ${jurusan} ${rombel}`} />
                        </div>
                        <div className="col-6 my-3">
                            <label className="form-label text-dark fw-semibold mb-1">Mata Pelajaran yang Ditinggalkan :</label>
                            <div className="col-12">
                                {jsonToArr(mapels)}
                            </div>
                        </div>
                        <div className="col-6 my-3">
                            <label className="form-label text-dark fw-semibold mb-0">Waktu Izin :</label>
                            <div className="col-12">
                                <span className="text-dark fs-4 mx-3">{waktuIzin}</span>
                                <span className="text-dark fs-5">s/d</span>
                                <span className="text-dark fs-4 mx-3">{waktuKembali}</span>
                            </div>
                        </div>
                        <div className="col-6 my-3">
                            <label className="form-label text-dark fw-semibold mb-0">Alasan Izin:</label>
                            <input className="form-control" type="text" disabled defaultValue={alasan} />
                        </div>
                        <div className="col-6 my-3">
                            <label className="form-label text-dark fw-semibold mb-0">Catatan Guru:</label>
                            <textarea className="form-control-lg form-control" defaultValue={catatanGuru} onChange={(e) => setCatatanGuru(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary float-end" type="button" onClick={() => handleConfirm('Disetujui')}>Setujui</button>
                    <button className="btn btn-danger mx-2 float-end" type="button" onClick={() => handleConfirm('Ditolak')}>Tolak</button>
                </div>
            </div>
        </div>
    );
};

export default DetailPerizinanGuru;
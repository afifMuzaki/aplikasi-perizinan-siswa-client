import React from "react";
import IzinCetak from "../../../aditionalComponents/izinCetak";
import { PDFDownloadLink } from "@react-pdf/renderer";

const DetailIzin = () => {
    return (
        <div className="card shadow mx-4">
            <div className="card-header py-3">
                <p className="text-primary m-0 fw-bold">Detail Perizinan Siswa</p>
                <PDFDownloadLink document={<IzinCetak />} fileName="test">
                    {(
                        { blob, url, loading, error }) => (loading ? 
                        (<button className="btn btn-danger float-end">Memuat...</button>) : (<button className="btn btn-danger float-end">Cetak</button>)
                    )}
                </PDFDownloadLink>
            </div>
            <div className="card-body">
                <div className="col-12 my-2">
                    <label className="form-label fw-semibold">Nama Siswa :</label>
                    <input type="text" className="form-control" disabled value="siswa1" />
                </div>
                <div className="col-12 my-2">
                    <label className="form-label fw-semibold">NIS Siswa :</label>
                    <input type="text" className="form-control" disabled value="647456365" />
                </div>
                <div className="col-12 my-2">
                    <label className="form-label fw-semibold">Kelas :</label>
                    <input type="text" className="form-control" disabled value="XII RPL B" />
                </div>
                <div className="col-12 my-2">
                    <label className="form-label fw-semibold">Waktu dan Tanggal Izin</label>
                    <div className="col-12">
                        <input type="text" className="form-control" disabled value="2023-16-03" />
                        <span className="fs-4 mx-3">08.30</span>
                        <span className="fs-5">s/d</span>
                        <span className="fs-4 mx-3">11.30</span>
                    </div>
                </div>
                <div className="col-12 my-2">
                    <label className="form-label fw-semibold">Alasan Izin</label>
                    <input className="form-control" type="text" disabled value="LDAASDWasaad" />
                </div>
                <div className="col-12 my-2">
                    <label className="form-label fw-semibold">Status</label>
                    <input className="form-control" type="text" disabled value="Disetujui" />
                </div>
                <div className="col-12 my-2">
                    <label className="form-label fw-semibold">Mengetahui Guru</label>
                    <input className="form-control" type="text" disabled value="guru1" />
                    <div className="col-12 my-2">
                        <label className="form-label fw-semibold">Catatan Guru</label>
                        <textarea className="form-control" disabled value="adwdadwf" />
                    </div>
                </div>
                <div className="col-12 my-2">
                    <label className="form-label fw-semibold">Mengetahui Petugas</label>
                    <input className="form-control" type="text" disabled value="Petugas1" />
                </div>
                <div className="col-12 my-2">
                    <label className="form-label fw-semibold">Catatan Petugas</label>
                    <textarea className="form-control" disabled value="dawdfe" />
                </div>
            </div>
        </div>
    );
}

export default DetailIzin;
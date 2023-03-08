import axios from 'axios';

class DataIzin {
    async getDataSiswa() {
        try {
            const dataSiswa = await axios.get('http://localhost:9000/api/siswa/identity', { withCredentials: true });
            return dataSiswa;
        } catch (err) {
            console.log(err);
        }
    }

    async getDataGuru() {
        try {
            const dataGuru = await axios.get('http://localhost:9000/api/guru/all', { withCredentials: true });
            return dataGuru;
        } catch (err) {
            console.log(err);
        }
    }

    async getDataMapel() {
        try {
            const dataMapel = await axios.get('http://localhost:9000/api/mapel/all', { withCredentials: true });
            return dataMapel;
        } catch (err) {
            console.log(err);
        }
    }

    async getDataKategori() {
        try {
            const dataKategori = await axios.get('http://localhost:9000/api/kategori/all', { withCredentials: true });
            return dataKategori;
        } catch (err) {
            console.log(err);
        }
    }
}

export default DataIzin;
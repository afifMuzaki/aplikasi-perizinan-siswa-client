import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/auth/loginForm';
import FormIzin from './components/siswa/formIzin';
import RiwayatIzin from './components/siswa/riwayatIzin';
import PermintaanIzinGuru from './components/sbAdmin/guruLayout/permintaanIzin';
import RekapIzinGuru from './components/sbAdmin/guruLayout/rekapIzin';
import PermintaanIzinPetugas from './components/sbAdmin/petugasLayout/permintaanIzin';
import RekapIzinPetugas from './components/sbAdmin/petugasLayout/rekapIzin';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LoginForm />}></Route>
        <Route path='/siswa/izin' element={<FormIzin />}></Route>
        <Route path='/siswa/riwayat' element={<RiwayatIzin />}></Route>
        <Route path='/guru/permintaan-izin' element={<PermintaanIzinGuru/>}></Route>
        <Route path='/guru/rekap-izin' element={<RekapIzinGuru/>}></Route>
        <Route path='/petugas/permintaan-izin' element={<PermintaanIzinPetugas/>}></Route>
        <Route path='/petugas/rekap-izin' element={<RekapIzinPetugas/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

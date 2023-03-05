import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/auth/loginForm';
import FormIzin from './components/siswa/formIzin';
import RiwayatIzin from './components/siswa/riwayatIzin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LoginForm />}></Route>
        <Route path='/izin' element={<FormIzin />}></Route>
        <Route path='/izin/riwayat' element={<RiwayatIzin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

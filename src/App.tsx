import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SistemaOperativo from './pages/SistemaOperativo';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';
import Laboratorio from './pages/Laboratorio';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sistema-operativo" element={<SistemaOperativo />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/laboratorio" element={<Laboratorio />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

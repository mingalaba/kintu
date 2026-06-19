import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import SistemaOperativo from './pages/SistemaOperativo';
import Servicios from './pages/Servicios';
import PartnerEvolucion from './pages/PartnerEvolucion';
import SprintsEvolucion from './pages/SprintsEvolucion';
import Nosotros from './pages/Nosotros';
import Laboratorio from './pages/Laboratorio';
import Contacto from './pages/Contacto';
import FutureAudit from './pages/FutureAudit';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sistema-operativo" element={<SistemaOperativo />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/partner-evolucion" element={<PartnerEvolucion />} />
          <Route path="/sprints-evolucion" element={<SprintsEvolucion />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/laboratorio" element={<Laboratorio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/future-audit" element={<FutureAudit />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

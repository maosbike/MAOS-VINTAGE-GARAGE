import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import CalculadoraPage from './pages/CalculadoraPage.jsx';
import CatalogoPage from './pages/CatalogoPage.jsx';
import ProcesoPage from './pages/ProcesoPage.jsx';
import CasosPage from './pages/CasosPage.jsx';
import ContactoPage from './pages/ContactoPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculadora" element={<CalculadoraPage />} />
        <Route path="/catalogo" element={<CatalogoPage />} />
        <Route path="/proceso" element={<ProcesoPage />} />
        <Route path="/casos" element={<CasosPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

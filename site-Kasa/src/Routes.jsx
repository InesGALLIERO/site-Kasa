import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import APropos from './pages/APropos';
import Contact from './pages/Contact';
import Page404 from './pages/Page404';

import Header from './components/Header';
import Footer from './components/Footer';

function RoutesApp() {
  return (
    <>
      {/* header visible sur toutes les pages */}
      <Header />

      {/* Définition des routes */}
      <Routes>
        <Route path="/" element={<Accueil />} />          {/* URL "/" → page d'accueil */}
        <Route path="/APropos" element={<APropos />} />   {/* URL "/about" → page À propos */}
        <Route path="/contact" element={<Contact />} /> {/* URL "/contact" → page Contact */}
        <Route path="*" element={<Page404 />} />
      </Routes>

      {/* Footer visible sur toutes les pages */}
      <Footer />
    </>
  );
}

export default RoutesApp;
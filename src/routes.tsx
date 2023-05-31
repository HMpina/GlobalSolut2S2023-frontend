import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Hints from './pages/Hints';
import HintsForm from './pages/Hints/Form';
import HintsDetail from './pages/Hints/Detail';

const Apps: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dicas" element={<Hints />} />
      <Route path="/dicas_cadastro" element={<HintsForm />} />
      <Route path="/dicas_cadastro/:id" element={<HintsForm />} />
      <Route path="/dicas/:id" element={<HintsDetail />} />
    </Routes>
  );
};

export default Apps;

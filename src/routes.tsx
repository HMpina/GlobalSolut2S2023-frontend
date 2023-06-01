import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Hints from './pages/Hints';
import HintsForm from './pages/Hints/Form';
import HintsDetail from './pages/Hints/Detail';

const Apps: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/dicas" component={Hints} />
      <Route path="/dicas_cadastro" component={HintsForm} />
      <Route path="/dicas_cadastro/:id" component={HintsForm} />
      <Route path="/dicas/:id" component={HintsDetail} />
    </BrowserRouter>
  );
};


export default Apps;

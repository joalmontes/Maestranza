// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './products/components/Header';
import Menu from './products/components/Menu';
import Home from './products/components/Home';
import ProductLayout from './products/components/productLayout';
import Profile from './products/components/Perfil'
import ComingSoon from './products/components/perfil_provedores';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Menu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/productLayout" element={<ProductLayout/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/ComingSoon" element={<ComingSoon/>} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;

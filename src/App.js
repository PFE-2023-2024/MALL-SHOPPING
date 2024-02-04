import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeBoutique from './Composants/Boutiques/HomeBoutique';
import Navbar1 from './Composants/Navbar/Navbar1';
import Home from './Composants/Boutiques_Dashboard/Home';
import Dashboard from './Composants/Boutiques_Dashboard/Composants/screen/Dashboard';
import Produit from './Composants/Boutiques_Dashboard/Composants/screen/Produit/Produit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar1 />} /> 
        <Route path="/Home" element={<Home ><Dashboard /></Home>}/>
        <Route path="/Home/Dashboard" element={<Home ><Dashboard /></Home>} />
        <Route path="/Home/Produit" element={<Home><Produit/></Home>} /> 
        <Route path="/HomeBoutique" element={<HomeBoutique />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
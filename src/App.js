import './App.css';

import React from 'react';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Signin from './pages/Signin';
import Home from './pages/index';
import Marketplace from './pages/marketplace';
import Signup from './pages/Signup';
import Inventory from './pages/inventory';
import Claim from './pages/claim';
import Pool from './pages/pool';




function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="signin" exact element={<Signin />} />
        <Route path="marketplace" exact element={<Marketplace />} />
        <Route path="signup" exact element={<Signup />} />
        <Route path="marketplace" exact element={<Marketplace />} />
        <Route path="inventory" exact element={<Inventory />} />
        <Route path="claim" exact element={<Claim />} />
        <Route path="pool" exact element={<Pool />} />


      </Routes>
     
    </Router>
  
    
  );
}

export default App;

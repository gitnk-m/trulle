import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom';
import NavWeb from './components/navWeb';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/about';

import Rough from './components/rough';
import { useEffect, useState } from 'react';

function App() {
  const location = new useLocation()
  
  
  return (
    <>
      {location.pathname!=='/'?<NavWeb/>:null}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>

        <Route path='/rough' element={<Rough/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

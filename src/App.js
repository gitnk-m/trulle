import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom';
import NavWeb from './components/navWeb';
import NavMob from './components/navmob';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/about';

import Rough from './components/rough';
import TestCheck from './pages/test';
import { useEffect, useState } from 'react';

function App() {
  const location = new useLocation()
  const [navbar, setNavbar] = useState(<NavWeb/>)
  const navSelect = () =>{
      if(window.window<768){
          setNavbar(<NavMob/>)
      }else{
          setNavbar(<NavWeb/>)
      }
  }
  useEffect(() => {
    if (window.innerWidth<768){
      setNavbar(<NavMob/>)
    }else{
      setNavbar(<NavWeb/>)
    }
    window.addEventListener('resize', navSelect);
    window.scrollTo(0, 0);
    return () => {
      window.scrollTo(0, 0);
      window.removeEventListener('resize', navSelect);
    };
  }, []);
  
  return (
    <>
      {location.pathname!=='/'?navbar:null}
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/about' element={<About/>}/> */}

        {/* <Route path='/rough' element={<TestCheck/>}/> */}
      </Routes>
      {location.pathname!=='/'?<Footer/>:null}      
    </>
  );
}

export default App;

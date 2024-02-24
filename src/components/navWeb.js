import { useState, useEffect } from 'react';
import './navWeb.css'

export default function NavWeb(){
    const [navBG, setNavBG] = useState('none')
    const [boxShadow, setBoxShadow] = useState('none')
    const handleScroll = () => {
        const position = window.scrollY;
        if (position >= 100) {
            setNavBG('#F7F7F7') 
            setBoxShadow('rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px')
        } else {
            setNavBG('none')
            setBoxShadow('none') 
        }
      };
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [navbar, setNavbar] = useState(<NavWeb/>)
    const navSelect = () =>{
        if(window.window<768){
            setNavbar()
        }
    }
    return(
        <div className='nav_container' style={{background:navBG, boxShadow:boxShadow}}>
            <div className='nav_main'>
                <div className='nav_logo'>
                    <img src='./images/navLogo.png' alt='trulle'/>
                </div>
                <div className='nav_web_menu align_right'>
                    <a href='#home'>Home</a>
                    <a href='#about'>About Us</a>
                    <a href='#service'>Service</a>
                    <a href='#portfolio'>Portfolio</a>
                    <a href='#contact'>Contact Us</a>
                </div>
                <div className='nav_what'>
                    <img src='./images/call.png' alt='trulle'/>
                </div>
            </div>
        </div>
    );
}
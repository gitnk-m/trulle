import { useState, useEffect } from 'react';
import './navWeb.css'

export default function NavWeb(){
    const [navBG, setNavBG] = useState('none')
    const handleScroll = () => {
        const position = window.scrollY;
        // setScrollPosition(position);
    
        if (position >= 100) {
            setNavBG('#F7F7F7') 
        } else {
            setNavBG('none') 
        }
      };
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(
        <div className='nav_container' style={{background:navBG}}>
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
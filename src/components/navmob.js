import { useState, useEffect } from 'react';
import './navMob.css'

export default function NavMob(){
    const [menuClick, setMenuClick] = useState(false)
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
    return(
        <div className='nav_container_mob' style={{backgroundColor:navBG, boxShadow:boxShadow}}>
            <div className='nav_main_mob'>
                <div className='nav_logo'>
                    <img src='./images/navLogo.svg' alt='trulle'/>
                </div>
                <div className={menuClick?'nav_mob_menu':'dispalyNone'}>
                    <div className={menuClick?'nav_mob_menu_container':"displayNone"}>
                        <a href='#home' onClick={()=>setMenuClick(!menuClick)}>Home</a>
                        <a href='#about' onClick={()=>setMenuClick(!menuClick)}>About Us</a>
                        <a href='#service' onClick={()=>setMenuClick(!menuClick)}>Service</a>
                        <a href='#portfolio' onClick={()=>setMenuClick(!menuClick)}>Portfolio</a>
                        <a href='#contact' onClick={()=>setMenuClick(!menuClick)}>Contact Us</a>
                        <div className='mob_menu_logo'>
                            <img src='./images/mobMenu.png' alt='Trulle.'/>
                        </div>
                    </div>
                </div>
                <div className='nav_mob_menu_btn' onClick={()=>setMenuClick(!menuClick)}>
                    <div className={menuClick?'bar right':'bar'}></div>
                    <div className={menuClick?'opaZero':'bar'} style={{transition:'all 1s'}}></div>
                    <div className={menuClick?'bar left':'bar'}></div>
                </div>
            </div>
        </div>
    );
}
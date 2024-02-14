import './Home.css'
import Marquee from '../components/marquee';
import Project from '../components/project';
import Testimonial from '../components/testimonial';
import Footer from '../components/footer';
import { useState, useEffect, useRef  } from 'react';
import NavWeb from '../components/navWeb';
import { Fade } from 'react-awesome-reveal';

import MouseFollower from "mouse-follower";
import gsap from "gsap";
// import "./curser.scss";
// import "curser"

export default function Home(){
    // MouseFollower.registerGSAP(gsap);

    // const cursor = new MouseFollower({
    //     container: '.home_wrapper',
    //     speed: 0.3
    // });

    const [enq, setEnq] = useState({
        web_development:'',
        web_application:'',
        app_development:'',
        logo_design:'',
        brand_design:'',
        write_us:''
    })

    const enqChange = (e) =>{
        const {type, name, checked, value} = e.target
        // console.log(type, name, e.target.checked)
        if (type==='checkbox'){
            if(checked)
            {
                setEnq((prevData) => ({
                    ...prevData,
                    [name]: name,
                }));
            }else{
                setEnq((prevData) => ({
                    ...prevData,
                    [name]: '',
                }));
            }
        }else{
            setEnq((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    }
    const enqSubmit = () =>{
        console.log(enq)
    }

    // const [sessionLoading, setSessionLoading] = useState(false)
//  Loading.....    
    const [loading, setLoading] = useState(true)
    const [nav, setNav] = useState(false)
    useEffect(()=>{
        const timer = setTimeout(() => {
        setLoading(false)
        }, 9500);

        // Clear the timeout if the component unmounts or if the effect re-runs
        return () => clearTimeout(timer);
    },[])
    useEffect(()=>{
        const timer = setTimeout(() => {
        sessionStorage.setItem('loading',true)
        setNav(true)
        }, 13500);

        // Clear the timeout if the component unmounts or if the effect re-runs
        return () => clearTimeout(timer);
    },[])

//  Mouse Follower
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const followerRef = useRef(null);

    useEffect(() => {
    const updateMousePosition = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        // const timeoutId = setTimeout(() => {
        //     setMousePosition({ x: e.clientX, y: e.clientY });
        //   }, 100);
        // return () => clearTimeout(timeoutId);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);
    
    useEffect(() => {
        const follower = followerRef.current;
        let position = { x: 0, y: 0 };
    
        const updateFollowerPosition = () => {
          const dx = mousePosition.x - position.x;
          const dy = mousePosition.y - position.y;
          const distance = Math.sqrt(dx * dx + dy * dy); // Calculate distance
          const speed = distance * .01; // Adjust factor for distance
    
          // Apply an ease-out effect based on the distance
          const ease = 1 - Math.exp(-speed);
    
          position.x += dx * ease;
          position.y += dy * ease;
    
          if (follower) {
            follower.style.left = position.x + 'px';
            follower.style.top = position.y + 'px';
          }
    
          requestAnimationFrame(updateFollowerPosition);
        };
    
        requestAnimationFrame(updateFollowerPosition);
    
        return () => cancelAnimationFrame(updateFollowerPosition);
      }, [mousePosition]);  
    const [followerClass, setFollowerClass] = useState('follower small peach')
//  Home Projects
    const projects =[
        {
            project_image:'./images/client-1.png',
            project_title:'Appl Brand Design',
            project_content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum blandit consectetur. 
            Nunc erat lectus, imperdiet at nisi id, congue tempor sapien. Ut id volutpat lacus. 
            Fusce blandit massa tortor, non commodo eros sagittis fringilla. 
            Morbi efficitur fermentum maximus. Aliquam a massa est. Morbi nec neque hendrerit, 
            laoreet metus non, elementum dolor.`,
            project_for:'DEVELOPMENT'
        },{
            project_image:'./images/client-1.png',
            project_title:'Veado Brand Design',
            project_content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum blandit consectetur. 
            Nunc erat lectus, imperdiet at nisi id, congue tempor sapien. Ut id volutpat lacus. 
            Fusce blandit massa tortor, non commodo eros sagittis fringilla. 
            Morbi efficitur fermentum maximus. Aliquam a massa est. Morbi nec neque hendrerit, 
            laoreet metus non, elementum dolor.`,
            project_for:'DESIGN'
        }
    ]

//  Home Testimonial
    const testimonials = [
        {
            performance:'Excellent',
            test_content:`lorem ipsum jifj iji  lorem ipsum jifj iji  lorem ipsum jifj iji  
            lorem ipsum jifj iji  lorem ipsum jifj iji`,
            test_by:'Ambrose',
            rating:1
        },{
            performance:'Excellent',
            test_content:`lorem ipsum jifj iji  lorem ipsum jifj iji  lorem ipsum jifj iji  
            lorem ipsum jifj iji  lorem ipsum jifj iji`,
            test_by:'Ambrose',
            rating:2
        },{
            performance:'Excellent',
            test_content:`lorem ipsum jifj iji  lorem ipsum jifj iji  lorem ipsum jifj iji  
            lorem ipsum jifj iji  lorem ipsum jifj iji`,
            test_by:'Ambrose',
            rating:3
        },{
            performance:'Excellent',
            test_content:`lorem ipsum jifj iji  lorem ipsum jifj iji  lorem ipsum jifj iji  
            lorem ipsum jifj iji  lorem ipsum jifj iji`,
            test_by:'Ambrose',
            rating:4
        },{
            performance:'Excellent',
            test_content:`lorem ipsum jifj iji  lorem ipsum jifj iji  lorem ipsum jifj iji  
            lorem ipsum jifj iji  lorem ipsum jifj iji`,
            test_by:'Ambrose',
            rating:5
        }
    ]
    const [homeTestIndex, setHomeTestIndex] = useState(0)
    const [testSlideMove, setTestSlideMove] = useState('translateX(0px)')
    const preHomeTest =()=>{
        if(homeTestIndex>0){
            setTestSlideMove(`translateX(-${360*(homeTestIndex-1)}px)`)
            setHomeTestIndex(homeTestIndex-1)
        }
    }
    const nextHomeTest =()=>{
        if(homeTestIndex<testimonials.length-3){
            setTestSlideMove(`translateX(-${360*(homeTestIndex+1)}px)`)
            setHomeTestIndex(homeTestIndex+1)
        }
    }


    const checkLoad = sessionStorage.getItem('loading')
    useEffect(()=>{
        if(checkLoad){
            setLoading(false)
            setNav(true)
        }
    },[checkLoad])
    return(
        <>
        {checkLoad?null:
        <div className={loading?'mainLoading':'mainLoading hide'}>
            <div className='sloganContainer'>
                <div className='slogantext'>
                    <h1 className='slogan'>

                    </h1>
                </div>
                <div className='circleContainer'>
                    <div className='circle'>

                    </div>
                </div>                    
            </div>
        </div>}
        {/* <div className={loading?'mainLoading':'mainLoading hide'}>
            <div className='sloganContainer'>
                <div className='slogantext'>
                    <h1 className='slogan'>

                    </h1>
                </div>
                <div className='circle aniCircle'>

                </div>
            </div>
        </div> */}
        {nav?<div className='navDrop' style={{animation:'navDrop 2s ease forwards'}}><NavWeb/></div>:null}
        <div id='home' style={checkLoad?{zIndex: 0}:{animation:'zmove 5s ease forwards'}} className={loading?'loading2 hide':'loading2'}>
            <div className='backCircle backAni' style={checkLoad?{width: '110rem',borderRadius: 0}:{animation:'backCircle 5s ease forwards'}}>
                <div className='newLandText' style={checkLoad?{opacity:1}:{animation:'landText 5s ease forwards'}}>
                    <h1>Your idea Comes Alive</h1>
                    <p>We create tailored Software solution for you business to hit the mark</p>
                </div>
                <div onMouseEnter={()=>setFollowerClass('followerDifference big peach')} onMouseLeave={()=>setFollowerClass('follower small peach')}  className='circle circle2 cirAni2' style={checkLoad?{width: '25rem',transform: 'translate(50%,-50%)',right: '30%'}:{animation:'circle2 5s ease forwards'}}></div>
            </div>
        </div>        
        <div className={loading?'home_wrapper hide':'home_wrapper'}>            
            {/* <div className='home_landing'>
                <div className='landing_content'>
                    <h1>Your Idea Comes <span>Alive</span></h1>
                    <p>We create tailored Software solution for you business to hit the mark </p>
                    <button className='btn landing_btn_colour'>Know More</button>
                </div>
                <div className='landing_image'>
                    <div className="landing_container" >
                        <div className="main">
                            <img src="./images/landing/landing.png"/>
                        </div>
                        <div className="one">
                            <img src="./images/landing/j.png"/>
                        </div>
                        <div className="two">
                            <img src="./images/landing/g.png"/>
                        </div>
                        <div className="three">
                            <img src="./images/landing/f.png"/>
                        </div>
                        <div className="four">
                            <img src="./images/landing/h.png"/>
                        </div>
                        <div className="five">
                            <img src="./images/landing/z.png"/>
                        </div>
                        <div className="six">
                            <img src="./images/landing/k.png"/>
                        </div>
                        <div className="seven">
                            <img src="./images/landing/l.png"/>
                        </div>
                        <div className="eight">
                            <img src="./images/landing/x.png"/>
                        </div>
                        <div className="nine">
                            <img src="./images/landing/a.png"/>
                        </div>
                        <div className="ten">
                            <img src="./images/landing/s.png"/>
                        </div>
                        <div className="eleven">
                            <img src="./images/landing/c.png"/>
                        </div>
                        <div className="twelve">
                            <img src="./images/landing/d.png"/>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='home_clients' onMouseEnter={()=>setFollowerClass('followerDifference white big')} onMouseLeave={()=>setFollowerClass('follower small peach')}>
                <div className='home_arc_top'>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="754" viewBox="0 0 1920 754" fill="none">
                        <path d="M1920 48.2117V753.5H0V48.2117C303.082 16.8861 625.56 0 960 0C1294.44 0 1616.92 16.8861 1920 48.2117Z" fill="#181818"/>
                    </svg> */}
                    {/* <img src='./images/top.png'/> */}
                </div>

                <div className='home_client_container'>
                    <h1>Our Clients</h1>
                    <div className='slide_container'>
                        <div className='slider'>
                            <Marquee 
                                children={<img src='./images/slide-1.png'/>} 
                                speed={'15000ms'}
                                type={'strip'}/>                                
                        </div>
                        <div className='slider'>
                            <Marquee 
                                children={<img src='./images/slide-2.png'/>} 
                                speed={'12000ms'}
                                type={'strip'}/>
                        </div>
                        <div className='slider'>
                            <Marquee 
                                children={<img src='./images/slide-3.png'/>} 
                                speed={'16000ms'}
                                type={'strip'}/>
                        </div>
                        <div className='slider'>
                            <Marquee 
                                children={<img src='./images/slide-1.png'/>} 
                                speed={'10000ms'}
                                type={'strip'}/>  
                        </div>
                        <div className='slider'>
                            <Marquee 
                                children={<img src='./images/slide-2.png'/>} 
                                speed={'11000ms'}
                                type={'strip'}/>
                        </div>
                        <div className='slider'>
                            <Marquee 
                                children={<img src='./images/slide-3.png'/>} 
                                speed={'13000ms'}
                                type={'strip'}/>
                        </div>
                        
                    </div>                    
                </div>
                
                <div className='home_arc_bottom'>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="658" viewBox="0 0 1920 658" fill="none">
                        <path d="M0 0H1920V609.178C1616.92 640.503 1294.44 657.39 960 657.39C625.56 657.39 303.082 640.518 0 609.178V0Z" fill="#181818"/>
                    </svg> */}
                </div>
            </div>
            <div id='service' className='home_who'>
                <Fade direction='up' duration={1000}>
                <h1 >WHO WE ARE</h1>
                </Fade>
                <Fade direction='up' duration={1000}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum blandit consectetur. 
                    Nunc erat lectus, imperdiet at nisi id, congue tempor sapien. Ut id volutpat lacus. 
                    Fusce blandit massa tortor, non commodo eros sagittis fringilla. 
                    Morbi efficitur fermentum maximus. Aliquam a massa est. Morbi nec neque hendrerit, 
                    laoreet metus non, elementum dolor. Aliquam erat volutpat. Phasellus ultrices suscipit aliquam. 
                    Duis scelerisque lacus non erat placerat feugiat. Cras non tellus maximus, auctor diam eu, tempus felis. 
                    Vestibulum enim ipsum, vulputate sit amet lacus vel, luctus malesuada enim.
                </p>
                </Fade>
            </div>
            <div className='home_expertise'>
                <h1>OUR EXPERTISE</h1>
                <div className='home_expertise_container'>
                    <div className='expert_container'>
                        <h2>DESIGN</h2>
                        <p>
                            User Experience<br/>
                            User interface<br/>
                            Printable<br/>
                            SMM Content
                        </p>
                    </div>
                    <div className='expert_container'>
                        <h2>DEVELOPMENT</h2>
                        <p>
                            Web Development<br/>
                            E - Commerce Site<br/>
                            Applications
                        </p>
                    </div>
                    <div className='expert_container'>
                        <h2>BRANDING</h2>
                        <p>
                            Logo<br/>
                            Brand Touch Point<br/>
                            Style Sheets<br/>
                            Franchise Design
                        </p>
                    </div>
                </div>
            </div>
            <div className='service_scroll' onMouseEnter={()=>setFollowerClass('followerDifference big peach')} onMouseLeave={()=>setFollowerClass('follower small peach')}>
                <div className='slider'>
                    <Marquee 
                        children={<span className='scroller'>BRAND DESIGN - DEVELOPMENT - ENTERPRISE BUSINESS APPLICATIONS - BRAND DESIGN - DEVELOPMENT - ENTERPRISE BUSINESS APPLICATIONS - BRAND DESIGN - DEVELOPMENT - ENTERPRISE BUSINESS APPLICATIONS</span>} 
                        speed={'200000ms'} 
                        type={'text'}/> 
                    <Marquee 
                        children={<span className='scroller'>BRAND DESIGN - DEVELOPMENT - ENTERPRISE BUSINESS APPLICATIONS - BRAND DESIGN - DEVELOPMENT - ENTERPRISE BUSINESS APPLICATIONS - BRAND DESIGN - DEVELOPMENT - ENTERPRISE BUSINESS APPLICATIONS</span>} 
                        speed={'120000ms'} 
                        type={'text'}/>                                
                </div>
            </div>
            <div id='portfolio' className='home_project'>
                <h1 >OUR PROJECTS</h1>
                <Project 
                    projects={projects}
                />                
            </div>
            <div className='home_testimonial'>
                <div className='testrow1'>
                    <h1>TESTIMONIAL</h1>
                    <div className='testimonial_keys'>
                        <div className='home__test_keys' onClick={preHomeTest}>
                            <img src='./images/left.png'/>
                        </div>
                        <div className='home__test_keys' onClick={nextHomeTest}>
                            <img src='./images/right.png'/>
                        </div>
                    </div>
                </div>
                <div className='home_testimonial_main'>
                    <div className='home_testimonial_slider' style={{width:`${testimonials.length*360}px`, transform:`${testSlideMove}`}}>
                        {testimonials.map((tests)=>{
                            return(
                                <Testimonial
                                    performance={tests.performance}
                                    test_content={tests.test_content}
                                    test_by={tests.test_by}
                                    rating={tests.rating}
                                />
                            )
                        })}
                    </div>                    
                </div>                
            </div>
            <div id='about' className='home_layer2'>
                <div className='home_workstyle'>
                    <h1>WORKING STYLE</h1>
                    <p className='paragraph'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum blandit consectetur. 
                        Nunc erat lectus, imperdiet at nisi id, congue tempor sapien. Ut id volutpat lacus. 
                        Fusce blandit massa tortor, non commodo eros sagittis fringilla. Morbi efficitur fermentum maximus. 
                        Aliquam a massa est. Morbi nec neque hendrerit, laoreet metus non, elementum dolor. Aliquam erat volutpat. 
                        Phasellus ultrices suscipit aliquam. Duis scelerisque lacus non erat placerat feugiat. 
                        Cras non tellus maximus, auctor diam eu, tempus felis. Vestibulum enim ipsum, vulputate sit amet lacus vel, luctus malesuada enim.
                    </p>
                    <p className='list'>
                        Aglie<br/>
                        Working Style<br/>
                        Working Style<br/>
                        Working Style
                    </p>
                </div>
                <div className='home_team'>
                    <h1>TEAM</h1>
                    <div className='team_list'>
                        <div className='team_container'>
                            <div className='team_container_top'>
                                <div className='team_title'>
                                    <h2>DESIGN</h2>
                                </div>
                                <div className='team_image'>
                                    <img src='./images/dummy_team.png'/>
                                </div>
                            </div>
                            <p className='team_name'>Ambrose M. Moore</p>
                        </div>
                        <div className='team_container'>
                            <div className='team_container_top'>
                                <div className='team_title'>
                                    <h2>DEVELOPMENT</h2>
                                </div>
                                <div className='team_image'>
                                    <img src='./images/dummy_team.png'/>
                                </div>
                            </div>
                            <p className='team_name'>Nirmalkumar M</p>
                        </div>
                        <div className='team_container'>
                            <div className='team_container_top'>
                                <div className='team_title'>
                                    <h2>DATA DEVELOPMENT</h2>
                                </div>
                                <div className='team_image'>
                                    <img src='./images/dummy_team.png'/>
                                </div>
                            </div>
                            <p className='team_name'>Karthikeyan T</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='contact' className='home_talk'>
                <h1>LET'S TALK</h1>
                <div className='home_talk_container'>
                    <div className='input_row'>
                        <div className='input_container'>
                            <label>
                                <input 
                                    className='input_field' 
                                    type='checkbox' 
                                    name='web_development'
                                    value={enq.web_development}
                                    onChange={enqChange} 
                                    />
                                <span>Web Development</span>
                            </label>
                        </div>
                        <div className='input_container'>
                            <label>
                                <input 
                                    className='input_field' 
                                    type='checkbox'
                                    name='web_application'
                                    value={enq.web_application} 
                                    onChange={enqChange} 
                                    />
                                <span>Web Application</span>
                            </label>
                        </div>
                        <div className='input_container'>
                            <label>
                                <input 
                                    className='input_field' 
                                    type='checkbox' 
                                    name='app_development'
                                    value={enq.app_development} 
                                    onChange={enqChange} 
                                    />
                                <span>App Development</span>
                            </label>
                        </div>
                    </div>
                    <div className='input_row'>
                        <div className='input_container'>
                            <label>
                                <input 
                                    className='input_field' 
                                    type='checkbox' 
                                    name='logo_design'
                                    value={enq.logo_design} 
                                    onChange={enqChange} 
                                    />
                                <span>Logo Design</span>
                            </label>
                        </div>
                        <div className='input_container'>
                            <label>
                                <input 
                                    className='input_field' 
                                    type='checkbox' 
                                    name='brand_design'
                                    value={enq.brand_design} 
                                    onChange={enqChange} 
                                    />
                                <span>Brand Design</span>
                            </label>
                        </div>
                    </div>
                    <div className='input_row'>
                        <div className='input_container text'>
                            <textarea 
                                className='input_field' 
                                placeholder='Write us'
                                name='write_us'
                                value={enq.write_us}
                                onChange={enqChange} 
                                rows="3"
                                />
                        </div>
                    </div>
                    <div className='input_row'>
                        <div className='input_container' onMouseEnter={()=>setFollowerClass('followerDifference small peach')} onMouseLeave={()=>setFollowerClass('follower small peach')}>
                            <button onClick={enqSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        <div className={followerClass} style={{ left: mousePosition.x-8, top: mousePosition.y-7 }}>
        {/* <div className={followerClass} ref={followerRef}> */}
        
        </div>
        </>
    );
}
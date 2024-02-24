import './Home.css'
import Marquee from '../components/marquee';
import Project from '../components/project';
import Testimonial from '../components/testimonial';
import Footer from '../components/footer';
import { useState, useEffect, useRef  } from 'react';
import NavWeb from '../components/navWeb';
import NavMob from '../components/navmob';
import { Fade } from 'react-awesome-reveal';
import {motion, useScroll} from "framer-motion";

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
        // sessionStorage.setItem('loading',false)
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
            project_image:'./images/projects/appl.png',
            project_title:'Appl Solar App',
            project_content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum blandit consectetur. 
            Nunc erat lectus, imperdiet at nisi id, congue tempor sapien. Ut id volutpat lacus. 
            Fusce blandit massa tortor, non commodo eros sagittis fringilla. 
            Morbi efficitur fermentum maximus. Aliquam a massa est. Morbi nec neque hendrerit, 
            laoreet metus non, elementum dolor.`,
            project_for:'DEVELOPMENT'
        },{
            project_image:'./images/projects/evergreen.png',
            project_title:'EverGreen Safety Website',
            project_content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum blandit consectetur. 
            Nunc erat lectus, imperdiet at nisi id, congue tempor sapien. Ut id volutpat lacus. 
            Fusce blandit massa tortor, non commodo eros sagittis fringilla. 
            Morbi efficitur fermentum maximus. Aliquam a massa est. Morbi nec neque hendrerit, 
            laoreet metus non, elementum dolor.`,
            project_for:'DEVELOPMENT'
        },{
            project_image:'./images/projects/flicker.png',
            project_title:'Flicker Brand Design',
            project_content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum blandit consectetur. 
            Nunc erat lectus, imperdiet at nisi id, congue tempor sapien. Ut id volutpat lacus. 
            Fusce blandit massa tortor, non commodo eros sagittis fringilla. 
            Morbi efficitur fermentum maximus. Aliquam a massa est. Morbi nec neque hendrerit, 
            laoreet metus non, elementum dolor.`,
            project_for:'DESIGN'
        },{
            project_image:'./images/projects/gt.png',
            project_title:'Goodtime Service App',
            project_content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum blandit consectetur. 
            Nunc erat lectus, imperdiet at nisi id, congue tempor sapien. Ut id volutpat lacus. 
            Fusce blandit massa tortor, non commodo eros sagittis fringilla. 
            Morbi efficitur fermentum maximus. Aliquam a massa est. Morbi nec neque hendrerit, 
            laoreet metus non, elementum dolor.`,
            project_for:'DEVELOPMENT'
        },{
            project_image:'./images/projects/nttf.png',
            project_title:'NTTF Creative Design',
            project_content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum blandit consectetur. 
            Nunc erat lectus, imperdiet at nisi id, congue tempor sapien. Ut id volutpat lacus. 
            Fusce blandit massa tortor, non commodo eros sagittis fringilla. 
            Morbi efficitur fermentum maximus. Aliquam a massa est. Morbi nec neque hendrerit, 
            laoreet metus non, elementum dolor.`,
            project_for:'DESIGN'
        },{
            project_image:'./images/projects/tned.png',
            project_title:'Govt Hr Sec Vocational Book Design',
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
            setTestSlideMove(`translateX(-${340*(homeTestIndex-1)}px)`)
            setHomeTestIndex(homeTestIndex-1)
        }
    }
    const nextHomeTest =()=>{
        if(homeTestIndex<testimonials.length-1){
            setTestSlideMove(`translateX(-${340*(homeTestIndex+1)}px)`)
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


//  Framer Animation
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["0 1.33", "1.45 1"]
    })
    useEffect(()=>{
        console.log(scrollYProgress)
    },[])


//  NavBar
    const [navbar, setNavbar] = useState(<NavWeb/>)
    const navSelect = () =>{
        if(window.innerWidth<768){
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
    
// touch check
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

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
        {nav?<div className='navDrop' style={window.innerWidth<768?null:{animation:'navDrop 2s ease forwards'}}>{navbar}</div>:null}
        <div id='home' style={checkLoad?{zIndex: 0}:{animation:'zmove 5s ease forwards'}} className={loading?'loading2 hide':'loading2'}>        
            <div className='backCircle backAni' style={checkLoad?{width: '100dvw', height:'100dvh',borderRadius: 0}:{animation:'backCircle 5s ease forwards'}}>
                <div className='newLandText' style={checkLoad?{opacity:1}:{animation:'landText 5s ease forwards'}}>
                    <h1>YOUR IDEA COMES ALIVE</h1>
                    <p>We create tailored Software solution for you business to hit the mark</p>
                    <button className='btn home_land_btn'><a href='#contact'>Let's Talk <img src='./images/button_arrow.png'></img></a></button>
                </div>
                <div onMouseEnter={()=>setFollowerClass('followerDifference big peach')} onMouseLeave={()=>setFollowerClass('follower small peach')}  className={checkLoad?'circle circle2 cirAni2 circle2landing':'circle circle2 cirAni2'} style={checkLoad?null:{animation:'circle2 5s ease forwards'}}>
                    <div className={nav?'home_landing_slide_cont':"home_landing_slider_dis"}>
                        <div className='home_landing_slider'>
                            <div className='home_landing_slide'>
                                <img src='./images/ss/kasap.png' alt='Model'/>
                            </div>
                            <div className='home_landing_slide'>
                                <img src='./images/ss/vedic.png' alt='Model'/>
                            </div>
                            <div className='home_landing_slide'>
                                <img src='./images/ss/hedge.png' alt='Model'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
        <div className={nav?'home_wrapper':'home_wrapper  hide'}>            
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
                <div className={nav?'home_arc_top_load blackMove':'home_arc_top_load'}>                    
                    <img src='./images/top.png'/>
                </div>
                <div className='home_client_container'>
                    <h1>Our Clients</h1>
                    <div className='slide_container'>
                        <div className='Client_slider'>
                            <Marquee 
                                children={<img src='./images/strip1.png'/>} 
                                speed={'45000ms'}
                                type={'strip'}/>                                
                        </div>
                        <div className='Client_slider'>
                            <Marquee 
                                children={<img src='./images/strip2.png'/>} 
                                speed={'30000ms'}
                                type={'strip'}/>
                        </div>
                        <div className='Client_slider'>
                            <Marquee 
                                children={<img src='./images/strip3.png'/>} 
                                speed={'15000ms'}
                                type={'strip'}/>
                        </div>
                    </div>      
                    <div className='smaller'>
                        <p>The world is smaller...</p>
                    </div>              
                </div>                
                <div className='home_arc_bottom'>                    
                    <img src='./images/top.png'/>
                </div>
            </div>
            <div className='home_who'>
                {/* <Fade direction='up' duration={1000}>
                <h1 >WHO WE ARE</h1>
                </Fade> */}
                <div className='home_who_contaier'>
                    <h2>Good Engagement, <br/>Brings Great Conversions</h2>
                    <p>
                    At Trulle, we understand the importance of engaging user experiences in driving conversions. 
                    From mobile apps to websites and e-commerce platforms, we specialize in crafting solutions that captivate users and drive action. 
                    With our expertise in enterprise software and brand design, we help businesses streamline operations and create a strong visual identity that resonates with customers. 
                    Let's work together to turn engagement into conversions. Contact us today!
                    </p>
                </div>
                <div className='home_who_image'>
                   <img src='./images/expert.png' alt='Experts'/>
                </div>
                
            </div>
            <div id='service' className='home_expertise'>
                <h2 className='home_expertise_title'>Our Expertise</h2>
                {window.innerWidth>768?<div className='home_expertise_container'>
                    {/* <div className='expert_container_home peach1'> */}
                    <motion.div 
                    className='expert_container_home peach1'
                    initial={{x:200}}
                    whileInView={{x:0}}
                    transition={{duration:.5}}
                    >
                        <h2>UX UI Design</h2>
                        <div className='home_expert_points'>
                            <p>
                                User Experience<br/>
                                User interface
                            </p>
                        </div>
                    </motion.div>
                    <div className='expert_container_home peach2'>
                        <h2>DEVELOPMENT</h2>
                        <div className='home_expert_points'>
                            <p>
                                Web Development<br/>
                                E - Commerce Site<br/>
                                Applications
                            </p>
                        </div>
                    </div>
                    <motion.div 
                    className='expert_container_home peach3'
                    initial={{x:-200}}
                    whileInView={{x:0}}
                    transition={{duration:.5}}
                    >
                        <h2>BRANDING</h2>
                        <div className='home_expert_points'>
                            <p>
                                Logo<br/>
                                Brand Touch Point<br/>
                                Style Sheets
                            </p>
                        </div>
                    </motion.div>
                </div>:<div className='home_expertise_container'>
                    {/* <div className='expert_container_home peach1'> */}
                    <motion.div 
                    className='expert_container_home peach1'
                    initial={{y:150}}
                    whileInView={{y:50}}
                    transition={{duration:.5}}
                    >
                        <img src='./images/expertDes.png' alt='Design'/>
                    </motion.div>
                    <div className='expert_container_home peach2'>
                        <img src='./images/expertDev.png' alt='Develop'/>
                    </div>
                    <motion.div 
                    className='expert_container_home peach3'
                    initial={{y:-150}}
                    whileInView={{y:-50}}
                    transition={{duration:.5}}
                    >
                        <img src='./images/expertBrand.png' alt='Brand'/>
                    </motion.div>
                </div>}
                <p className='home_expertise_des'>
                    At Trulle, we're passionate about crafting seamless user experiences (UX) and captivating user interfaces (UI) 
                    that leave a lasting impression. Our expertise spans mobile app development, dynamic website creation, e-commerce platforms, 
                    and enterprise software solutions. From streamlining business operations with ERP systems to designing custom applications, 
                    we ensure efficiency and informed decision-making. Our brand design services extend beyond logos, encompassing comprehensive brand guidelines for a consistent visual identity. 
                    With a focus on expertise, innovation, collaboration, and results, Trulle is your trusted partner in driving digital success. 
                    Let's build something amazing together – get in touch with us today!
                </p>
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
                <h1 className='home_project_title'>OUR PROJECTS</h1>
                <Project 
                    projects={projects}
                />                
            </div>
            <div className='home_testimonial'>
                <div className='testrow1'>
                    <h1 className='home_testimonial_title'>TESTIMONIAL</h1>
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
                <div className='home_arc_top'>
                    <img src='./images/top.png'/>
                </div>
                <div className='home_workstyle'>
                    <h1 className='home_workstyle_title'>Our Approach</h1>
                    <div className='workStyle_image'>
                        <img src='./images/homeStyle.png' alt='Home Style'/>
                    </div>
                    <h2 className='home_brand_title'>Client-Centric Approach</h2>
                    <p className='paragraph'>
                    "At Trulle, we believe in the power of collaboration and understanding the unique ambitionsdriving each project. 
                    We initiate every venture by immersing ourselves in your world—graspingnot just the outlined objectives but diving deeper into your aspirations, 
                    challenges, and broadervision. Through in-depth discussions and meticulous analysis, we dissect the intricacies of yourgoals, 
                    ensuring a thorough understanding of what success truly means to you.This immersive approach allows us to craft strategies that are not just aligned but finelytailored to surpass your expectations. 
                    We amalgamate your aspirations with our expertise,fusing innovative thinking with a strategic mindset to shape a roadmap that leads to unparalleled outcomes. 
                    Our portfolio of success stories stands as a testament to our unwaveringdedication to delivering nothing short of excellence. 
                    Each triumph is a reflection of our commitment to turning your aspirations into a reality that exceeds even the loftiest of goals."
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
                <div className='home_arc_bottom'>
                    <img src='./images/top.png'/>
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
        {nav?<Footer/>:null}
        {isTouchDevice?null:<div className={followerClass} style={{ left: mousePosition.x-8, top: mousePosition.y-7 }}>
        {/* <div className={followerClass} ref={followerRef}> */}
        
        </div>}
        </>
    );
}
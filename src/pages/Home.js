import './Home.css'
import Marquee from '../components/marquee';
import Project from '../components/project';
import Testimonial from '../components/testimonial';
import Footer from '../components/footer';
import { useState, useEffect, useRef  } from 'react';
import NavWeb from '../components/navWeb';
import NavMob from '../components/navmob';
// import { Fade } from 'react-awesome-reveal';
import {motion} from "framer-motion";
import axios from 'axios';

// import "./curser.scss";
// import "curser"

const CustomAlert = ({ message1, message2, onClose }) => {
    return (
        <div className='alert-container'>
            <div className="alertBg"></div>
            <div className='alert'>
                <div className="message">{message1}</div>
                <div className="message">{message2}</div>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
  };

export default function Home(){
    // MouseFollower.registerGSAP(gsap);

    // const cursor = new MouseFollower({
    //     container: '.home_wrapper',
    //     speed: 0.3
    // });

    const [enq, setEnq] = useState({
        AppStatus:'webEnq',
        name:'',
        mobile:'',
        email:'',
        web_development:'',
        web_application:'',
        app_development:'',
        logo_design:'',
        brand_design:''
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
    const enqSubmit = (e) =>{
        e.preventDefault()

        const enqData = new FormData();
        enqData.append('AppStatus', enq.AppStatus);
        enqData.append('Name', enq.name)
        enqData.append('Mobile', enq.mobile)
        enqData.append('Email', enq.email)
        enqData.append('AppStatus', enq.AppStatus)
        enqData.append('Web_development', enq.web_development)
        enqData.append('Web_application', enq.web_application)
        enqData.append('App_development', enq.app_development)
        enqData.append('Logo_design', enq.logo_design)
        enqData.append('Brand_design', enq.brand_design)

        axios.post('https://script.google.com/macros/s/AKfycbz-a-TG2qhcK0xXkmC2hHvq23b64_SJ_XvM7ZuOhoSaKTV4sOe6EpnKEfh6hX0yvXv-Og/exec', enqData)
        .then(res=>{
            if (res.status===200){
                handleShowAlert()
                setEnq({
                    AppStatus:'webEnq',
                    name:'',
                    mobile:'',
                    email:'',
                    web_development:'',
                    web_application:'',
                    app_development:'',
                    logo_design:'',
                    brand_design:''
                })
            } else{
                console.error('Server returned an error status:', res.status);
            }
        })
        .catch(error=>{
            console.error('Error:',error);
        })
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
            project_title:'Amazing Power Private Limited',
            project_content:`Appl solar ap streamlines solar projects by empowering Appl to conduct precise customer surveys, 
            generate instant quotations, and effortlessly manage installations. With its advanced features, including invoice and quotation generation, 
            Appl ensures smooth transactions and efficient project management. Furthermore, it meticulously maintains detailed customer records, 
            facilitating ongoing support and fostering long-term relationships. Experience the convenience and efficiency of Appl in every step of your solar journey.`,
            project_for:'DEVELOPMENT'
        },{
            project_image:'./images/projects/evergreen.png',
            project_title:'EverGreen Safety',
            project_content:`Evergreen Safety is a leading provider in safety solutions. Using cutting-edge ReactJS technology, 
            we meticulously detailed their services and product offerings, ensuring an immersive user experience. 
            we leveraged the power of parallax effects to give the website a modern and dynamic look, 
            capturing the essence of Evergreen Safety's commitment to innovation and excellence. 
            With separate pages dedicated to showcasing their extensive product and service categories, 
            we provided visitors with easy access to valuable information.
            `,
            project_for:'DEVELOPMENT'
        },{
            project_image:'./images/projects/flicker.png',
            project_title:'Flicker Show',
            project_content:`Flicker Show is a media production company, they are in fond in craft a logo that captures their unique identity and work theme. 
            Our team carefully considered their requirements and creative vision to deliver a logo that embodies the essence of their brand.`,
            project_for:'DESIGN'
        },{
            project_image:'./images/projects/gt.png',
            project_title:'Goodtime Service',
            project_content:`Tailored web app for GoodTime Services, specialists in daily cleaning and general maintenance. Our solution acts as an ERP and DMS, 
            streamlining workflow for seamless task management and customer record-keeping. With a focus on maintaining smooth operations and managing customer interactions, 
            our app ensures efficiency at every step. Experience the benefits of optimized workflow and enhanced customer management with Trulle's bespoke web app solutions.`,
            project_for:'DEVELOPMENT'
        },{
            project_image:'./images/projects/nttf.png',
            project_title:'NTTF',
            project_content:`Trulle partnered with NTTF, a renowned educational institution, to design and implement safety and guidance signage. 
            Our creative solutions ensure clarity and effectiveness in communication throughout the premises.`,
            project_for:'DESIGN'
        },{
            project_image:'./images/projects/tned.png',
            project_title:'Vocational Internship Book',
            project_content:`Trulle is proud to showcase our collaboration with the Tamil Nadu Education Department in designing and laying out the Internship Companion Book for vocational students in higher secondary education. 
            As part of our contribution, we introduced a captivating mascot that embodies the spirit of exploration and learning. This mascot serves as a friendly guide throughout the book, engaging students and enhancing their learning experience.`,
            project_for:'DESIGN'
        }
    ]

//  Home Testimonial
    const testimonials = [
        {
            performance:'Excellent',
            test_content:`Impressed by Trulle's custom ERP software, tailored to our needs. 
            Their SEO-integrated system has optimized our operations, enhancing efficiency and driving growth."`,
            test_by:'Suren',
            rating:4
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
    // const ref = useRef(null)
    // const {scrollYProgress} = useScroll({
    //     target:ref,
    //     offset:["0 1.33", "1.45 1"]
    // })


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

//  Alert on Submit
    const [showAlert, setShowAlert] = useState(false);

    const handleShowAlert = () => {
        setShowAlert(true);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    return(
        <>
        {checkLoad?null:
        <div className={loading?'mainLoading':'mainLoading hide'}>
            <div className='sloganContainer'>
                <div className='slogantext'>
                    <article>
                    <h1 className='slogan'>

                    </h1>
                    </article>
                </div>
                <div className='circleContainer'>
                    <div className='circle'>

                    </div>
                </div>                    
            </div>
        </div>}
        {nav?<div className='navDrop' style={window.innerWidth<768?null:{animation:'navDrop 2s ease forwards'}}>{navbar}</div>:null}
        <div id='home' style={checkLoad?{zIndex: 0}:{animation:'zmove 5s ease forwards'}} className={loading?'loading2 hide':'loading2'}>        
            <div className='backCircle backAni' style={checkLoad?{width: '100dvw', height:'100dvh',borderRadius: 0}:{animation:'backCircle 5s ease forwards'}}>
                <div className='newLandText' style={checkLoad?{opacity:1}:{animation:'landText 5s ease forwards'}}>
                    <article>
                    <header>
                    <h1>YOUR IDEA COMES ALIVE</h1>
                    <p>We create <em>tailored Software</em> solution for you business to hit the mark</p>
                    </header>
                    </article>
                    <button className='btn home_land_btn'><a href='#contact'>Let's Talk <img src='./images/button_arrow.png' alt='trulle'></img></a></button>
                </div>
                <div onMouseEnter={()=>setFollowerClass('followerDifference big peach')} onMouseLeave={()=>setFollowerClass('follower small peach')}  className={checkLoad?'circle circle2 cirAni2 circle2landing':'circle circle2 cirAni2'} style={checkLoad?null:{animation:'circle2 5s ease forwards'}}>
                    <div className={nav?'home_landing_slide_cont':"home_landing_slider_dis"}>
                        <div className='home_landing_slider'>
                            <div className='home_landing_slide'>
                                <img src='./images/ss/kasap.png' alt='trulle, vellore'/>
                            </div>
                            <div className='home_landing_slide'>
                                <img src='./images/ss/vedic.png' alt='trulle, vellore'/>
                            </div>
                            <div className='home_landing_slide'>
                                <img src='./images/ss/hedge.png' alt='trulle, vellore'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
        <div className={nav?'home_wrapper':'home_wrapper  hide'}>            
            <div className='home_clients' onMouseEnter={()=>setFollowerClass('followerDifference white big')} onMouseLeave={()=>setFollowerClass('follower small peach')}>
                <div className={nav?'home_arc_top_load blackMove':'home_arc_top_load'}>                    
                    <img src='./images/top.png' alt='trulle'/>
                </div>
                <div className='home_client_container'>
                    <h1>Our Clients</h1>
                    <div className='slide_container'>
                        <div className='Client_slider'>
                            <Marquee 
                                children={<img src='./images/ss/strip1.svg' alt='Trulle Clients'/>} 
                                speed={'198000ms'}
                                // speed={'9000ms'}
                                type={'strip'}/>                                
                        </div>
                        <div className='Client_slider'>
                            <Marquee 
                                children={<img src='./images/ss/strip2.svg' alt='Trulle Clients'/>} 
                                speed={'132000ms'}
                                // speed={'6000ms'}
                                type={'strip'}/>
                        </div>
                        <div className='Client_slider'>
                            <Marquee 
                                children={<img src='./images/ss/strip3.svg' alt='Trulle Clients'/>} 
                                speed={'66000ms'}
                                // speed={'3000ms'}
                                type={'strip'}/>
                        </div>
                    </div>      
                    <div className='smaller'>
                        <p>The world is smaller...</p>
                    </div>              
                </div>                
                <div className='home_arc_bottom'>                    
                    <img src='./images/top.png' alt='trulle'/>
                </div>
            </div>
            <div className='home_who'>
                {/* <Fade direction='up' duration={1000}>
                <h1 >WHO WE ARE</h1>
                </Fade> */}
                <div className='home_who_contaier'>
                    <article>
                        <main>
                            <header>
                                <h2>Good Engagement, <br/>Brings Great Conversions</h2>
                            </header>
                            <summary>
                                <p>
                                At <em>Trulle</em>, we understand the importance of engaging user experiences in driving conversions. 
                                From <em>mobile apps</em> to <em>websites</em> and <em>e-commerce</em> platforms, we specialize in crafting solutions that captivate users and drive action. 
                                With our expertise in <em>enterprise software</em> and <em>brand design</em>, we help businesses streamline operations and create a strong visual identity that resonates with customers. 
                                Let's work together to turn engagement into conversions. Contact us today!
                                </p>
                            </summary>
                        </main>
                    </article>
                </div>
                <div className='home_who_image'>
                    <figure>
                        <img src='./images/expert.png' alt='Trulle way' onMouseEnter={()=>setFollowerClass('followerOther big white')} onMouseLeave={()=>setFollowerClass('follower small peach')}/>
                    </figure>
                </div>
                
            </div>
            <div id='service' className='home_expertise'>
                <article>
                    <header>
                        <h2 className='home_expertise_title'>Our Expertise</h2>
                    </header>
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
                                <em>User Experience</em><br/>
                                <em>User interface</em>
                            </p>
                        </div>
                    </motion.div>
                    <div className='expert_container_home peach2'>
                        <h2>DEVELOPMENT</h2>
                        <div className='home_expert_points'>
                            <p>
                            <em>Web Development</em><br/>
                            <em>E - Commerce Site</em><br/>
                            <em>Applications</em>
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
                            <em>Logo</em><br/>
                            <em>Brand Touch Point</em><br/>
                            <em>Style Sheets</em>
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
                        <img src='./images/expertDes.png' alt='UX UI Design'/>
                    </motion.div>
                    <div className='expert_container_home peach2'>
                        <img src='./images/expertDev.png' alt='Development'/>
                    </div>
                    <motion.div 
                    className='expert_container_home peach3'
                    initial={{y:-150}}
                    whileInView={{y:-50}}
                    transition={{duration:.5}}
                    >
                        <img src='./images/expertBrand.png' alt='Branding'/>
                    </motion.div>
                </div>}
                <p className='home_expertise_des'>
                    At <em>Trulle</em>, we're passionate about crafting seamless user experiences (<em>UX</em>) and captivating user interfaces (<em>UI</em>) 
                    that leave a lasting impression. Our expertise spans <em>mobile app development</em>, <em>dynamic website creation</em>, <em>e-commerce platforms</em>, 
                    and <em>enterprise software</em> solutions. From streamlining business operations with <em>ERP</em> systems to designing custom applications, 
                    we ensure efficiency and informed decision-making. Our <em>brand design</em> services extend beyond <em>logos</em>, encompassing comprehensive <em>brand</em> guidelines for a consistent visual identity. 
                    With a focus on expertise, innovation, collaboration, and results, <em>Trulle</em> is your trusted partner in driving digital success. 
                    Let's build something amazing together – get in touch with us today!
                </p>
                </article>
            </div>
            <div className='service_scroll' onMouseEnter={()=>setFollowerClass('followerDifference big peach')} onMouseLeave={()=>setFollowerClass('follower small peach')}>
                <div className='slider'>
                    <Marquee 
                        children={<span className='scroller'><em>BRAND DESIGN</em> - <em>DEVELOPMENT</em> - <em>ENTERPRISE BUSINESS APPLICATIONS</em> - <em>BRAND DESIGN</em> - <em>DEVELOPMENT</em> - <em>ENTERPRISE BUSINESS APPLICATIONS</em> - <em>BRAND DESIGN</em> - <em>DEVELOPMENT</em> - <em>ENTERPRISE BUSINESS APPLICATIONS</em></span>} 
                        speed={'200000ms'} 
                        type={'text'}/> 
                    <Marquee 
                        children={<span className='scroller'><em>BRAND DESIGN</em> - <em>DEVELOPMENT</em> - <em>ENTERPRISE BUSINESS APPLICATIONS</em> - <em>BRAND DESIGN</em> - <em>DEVELOPMENT</em> - <em>ENTERPRISE BUSINESS APPLICATIONS</em> - <em>BRAND DESIGN</em> - <em>DEVELOPMENT</em> - <em>ENTERPRISE BUSINESS APPLICATIONS</em></span>} 
                        speed={'150000ms'} 
                        type={'text'}/>                                
                </div>
            </div>
            <div id='portfolio' className='home_project'>
                <article>
                    <header>
                        <h1 className='home_project_title'>OUR PROJECTS</h1>
                    </header>
                <Project 
                    projects={projects}
                />       
                </article>         
            </div>
            <div className='home_testimonial'>
                <div className='testrow1'>
                    <header>
                        <h1 className='home_testimonial_title'>TESTIMONIAL</h1>
                    </header>
                    <div className='testimonial_keys'>
                        <div className='home__test_keys' onClick={preHomeTest}>
                            <img src='./images/left.png' alt='trulle'/>
                        </div>
                        <div className='home__test_keys' onClick={nextHomeTest}>
                            <img src='./images/right.png' alt='trulle'/>
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
                    <img src='./images/top.png' alt='trulle'/>
                </div>
                <div className='home_workstyle'>
                    <article>
                        <header>
                            <h1 className='home_workstyle_title'>Our Approach</h1>
                        </header>
                    <div className='workStyle_image'>
                        <img src='./images/homeStyle.svg' alt='Trulle Style'/>
                    </div>
                    <header>
                        <h2 className='home_brand_title'>Client-Centric Approach</h2>
                    </header>
                    <p className='paragraph'>
                    "At <em>Trulle</em>, we believe in the power of collaboration and understanding the unique ambitionsdriving each project. 
                    We initiate every venture by immersing ourselves in your world—graspingnot just the outlined objectives but diving deeper into your aspirations, 
                    challenges, and broadervision. Through in-depth discussions and meticulous analysis, we dissect the intricacies of yourgoals, 
                    ensuring a thorough understanding of what success truly means to you.This immersive approach allows us to craft strategies that are not just aligned but finelytailored to surpass your expectations. 
                    We amalgamate your aspirations with our expertise,fusing innovative thinking with a strategic mindset to shape a roadmap that leads to unparalleled outcomes. 
                    Our <em>portfolio</em> of success stories stands as a testament to our unwaveringdedication to delivering nothing short of excellence. 
                    Each triumph is a reflection of our commitment to turning your aspirations into a reality that exceeds even the loftiest of goals."
                    </p>
                    </article>
                </div>
                {/* <div className='home_team'>
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
                </div> */}
                <div className='home_arc_bottom'>
                    <img src='./images/top.png'alt='trulle'/>
                </div>
            </div>
            <div id='contact' className='home_talk'>
                <h1>LET'S TALK</h1>
                <div className='home_talk_container'>
                    <form onSubmit={enqSubmit}>
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
                        <div className='input_container'>
                            <input
                            type='text'
                            name='name'
                            value={enq.name}
                            onChange={enqChange}
                            placeholder='Name'
                            required
                            />
                        </div>
                        <div className='input_container'>
                            <input
                            type='tel'
                            name='mobile'
                            value={enq.mobile}
                            onChange={enqChange}
                            placeholder='Mobile Number'
                            minLength={10}
                            maxLength={10}
                            pattern="[0-9]{10}"
                            required
                            />
                        </div>
                        <div className='input_container'>
                            <input
                            type='email'
                            name='email'
                            value={enq.email}
                            onChange={enqChange}
                            placeholder='Email'
                            />
                        </div>
                    </div>
                    <div className='input_row'>
                        <div className='input_container' onMouseEnter={()=>setFollowerClass('followerDifference small peach')} onMouseLeave={()=>setFollowerClass('follower small peach')}>
                            <button>Submit</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>            
        </div>
        {nav?<Footer/>:null}
        {isTouchDevice?null:<div className={followerClass} style={{ left: mousePosition.x-8, top: mousePosition.y-7 }}>
        {/* <div className={followerClass} ref={followerRef}> */}
        
        </div>}
        {showAlert && <CustomAlert message1='Thanks for Contacting Trulle.' message2=' Our Team will contact you soon...' onClose={handleCloseAlert} />}
        </>
    );
}
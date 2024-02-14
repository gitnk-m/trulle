import './About.css'
import { useState } from 'react'

export default function About(){
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
    return(
        <>
            <div className='about_banner'>
                <img src='./images/aboutDummyBanner.png' alt='About Banner'/>
            </div>
            <div className='about_wrapper'>
                <h2>Welcome to trulle</h2>
                <p>
                    At Trulle, we are passionate creators, dedicated to shaping impactful digital solutions. 
                    Specializing in responsive web and app development, our team thrives on crafting seamless user experiences. 
                    Our expertise extends beyond development; we're innovators in graphic design, transforming concepts into visually compelling narratives that resonate. 
                    Additionally, our comprehensive branding services focus on forging unique brand identities that connect with audiences, 
                    ensuring our partners stand out in competitive landscapes. At Trulle, innovation meets creativity, 
                    driving our commitment to empower brands and businesses on their digital journeys.
                </p>
                <h2>Our Expertise</h2>
                <div className='expert_container'>                
                    <div className='about_expert_images'>
                        <div className='about_expert_container_individual'>
                            <div className='about_expert_container_image'>
                                <img src='./images/about_design.png' alt='design'/>
                            </div>
                            <h3>Designing</h3>
                        </div>
                        <div className='about_expert_container_individual'>
                            <div className='about_expert_container_image'>
                                <img src='./images/about_development.png' alt='design'/>
                            </div>
                            <h3>Development</h3>
                        </div>
                        <div className='about_expert_container_individual'>
                            <div className='about_expert_container_image'>
                                <img src='./images/about_branding.png' alt='design'/>
                            </div>
                            <h3>Branding</h3>
                        </div>
                        <div className='about_expert_container_individual'>
                            <div className='about_expert_container_image'>
                                <img src='./images/about_branding.png' alt='design'/>
                            </div>
                            <h3>Fourth</h3>
                        </div>
                    </div>
                    <h2>Designing</h2>
                    <p>
                        At Trulle, our passion lies in transforming ideas into visually captivating representations. 
                        Our expert graphic design team specializes in crafting cohesive brand identities, 
                        eye-catching print designs, and compelling marketing collateral. 
                        Whether it's creating a brand logo that embodies your essence or designing impactful print materials that leave a lasting impression, 
                        we merge innovative strategies with artistic flair to elevate your brand’s visual presence.
                        <br/>
                        We also excel in creating intuitive user interfaces (UI) and enriching user experiences (UX) through our designs. 
                        From illustrations to infographics and motion graphics, our creative solutions blend creativity with functionality, 
                        ensuring your message stands out in the digital space.
                    </p>
                    <h2>Development</h2>
                    <p>
                        At Trulle, we specialize in crafting high-quality, responsive websites and intuitive applications that are tailored to your specific requirements. 
                        Our team brings expertise in user-centric design, employing agile methodologies to ensure seamless experiences across various platforms. 
                        We focus on not just creating digital solutions but driving tangible success for your business through innovative and functional designs.
                        <br/>
                        From intricate e-commerce platforms to user-friendly content management systems (CMS), our web development services cover a wide spectrum of needs. 
                        Additionally, our app development expertise spans iOS, Android, and cross-platform solutions. We prioritize delivering robust, scalable, 
                        and engaging applications that resonate with your audience and meet your business objectives.
                    </p>
                    <h2>Branding</h2>
                    <p>
                        Trulle is committed to helping you discover and refine your brand's narrative. Our comprehensive branding services encompass strategic planning, 
                        meticulous identity design, and comprehensive brand guideline creation. We collaborate closely with you to understand your values, aspirations, 
                        and target audience, ensuring that every element of your brand story aligns cohesively.
                        <br/>
                        Our goal is to create unique and memorable brand experiences. We guide you through the process of establishing a distinct identity that resonates with your audience, 
                        allowing your brand to stand out and forge meaningful connections.
                    </p>
                </div>
                <h2>Our Work Flow</h2>
                <div className='about_flow_image_container'>
                    <img src='./images/about_flow.png' alt='flow'/>
                </div>
                <h2>Client-Centric Approach</h2>
                <div className='about_approach_image_container'>
                    <img src='./images/about_vector.png' alt='flow'/>
                </div>
                <div className='expert_container'>                
                    <p>
                        At Trulle, every project begins with understanding your aspirations. We delve into your goals, challenges, and vision to craft strategies that not only meet but exceed expectations. 
                        Our success stories are a testament to our commitment to delivering excellence.
                    </p>
                </div>
                <h2>Explore Our Portfolio</h2>
                <div className='portfolio'>
                    <div className='slider'>
                        <div className='about_container'>
                            <div className='slide_about_image'>
                                <img src='/images/about-logo.png' alt='logo'/>
                            </div>
                            <div className='slide_about_title'>
                                <p>SRU Elite Kids School</p>
                                <div className='about_share_image'>
                                    <img src='./images/slide_share.png' alt='share'/>    
                                </div>
                            </div>
                        </div>
                        <div className='about_container'>
                            <div className='slide_about_image'>
                                <img src='/images/about-logo.png' alt='logo'/>
                            </div>
                            <div className='slide_about_title'>
                                <p>SRU Elite Kids School</p>
                                <div className='about_share_image'>
                                    <img src='./images/slide_share.png' alt='share'/>    
                                </div>
                            </div>
                        </div>
                        <div className='about_container'>
                            <div className='slide_about_image'>
                                <img src='/images/about-logo.png' alt='logo'/>
                            </div>
                            <div className='slide_about_title'>
                                <p>SRU Elite Kids School</p>
                                <div className='about_share_image'>
                                    <img src='./images/slide_share.png' alt='share'/>    
                                </div>
                            </div>
                        </div>
                        <div className='about_container'>
                            <div className='slide_about_image'>
                                <img src='/images/about-logo.png' alt='logo'/>
                            </div>
                            <div className='slide_about_title'>
                                <p>SRU Elite Kids School</p>
                                <div className='about_share_image'>
                                    <img src='./images/slide_share.png' alt='share'/>    
                                </div>
                            </div>
                        </div>
                        <div className='about_container'>
                            <div className='slide_about_image'>
                                <img src='/images/about-logo.png' alt='logo'/>
                            </div>
                            <div className='slide_about_title'>
                                <p>SRU Elite Kids School</p>
                                <div className='about_share_image'>
                                    <img src='./images/slide_share.png' alt='share'/>    
                                </div>
                            </div>
                        </div>
                        <div className='about_container'>
                            <div className='slide_about_image'>
                                <img src='/images/about-logo.png' alt='logo'/>
                            </div>
                            <div className='slide_about_title'>
                                <p>SRU Elite Kids School</p>
                                <div className='about_share_image'>
                                    <img src='./images/slide_share.png' alt='share'/>    
                                </div>
                            </div>
                        </div>
                        <div className='about_container'>
                            <div className='slide_about_image'>
                                <img src='/images/about-logo.png' alt='logo'/>
                            </div>
                            <div className='slide_about_title'>
                                <p>SRU Elite Kids School</p>
                                <div className='about_share_image'>
                                    <img src='./images/slide_share.png' alt='share'/>    
                                </div>
                            </div>
                        </div>
                        <div className='about_container'>
                            <div className='slide_about_image'>
                                <img src='/images/about-logo.png' alt='logo'/>
                            </div>
                            <div className='slide_about_title'>
                                <p>SRU Elite Kids School</p>
                                <div className='about_share_image'>
                                    <img src='./images/slide_share.png' alt='share'/>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='about_join_statement'>Join Us in Shaping Digital Tomorrow</h2>
                <div className='expert_container'> 
                    <p>
                        Let's embark on a journey together. Whether you're a startup, a growing enterprise, or an established brand, we're here to empower your digital presence. 
                        Contact us today to explore how we can elevate your digital game.
                    </p>
                </div>
                <div className='home_talk'>
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
                            <div className='input_container'>
                                <button onClick={enqSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
        </>
    );
}
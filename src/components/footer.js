import './footer.css'
export default function Footer (){
    return(
        <>
            <div className='footer'>
                {/* <h1>Contact Us</h1> */}
                <footer>
                <div className='footer_div'>
                    <div className='footer_container'>
                        <div className='footerLogo'>
                            <img src='./images/footerLogo.png' alt='Trulle'></img>
                        </div>
                        <div className='container_1'>
                            <h3>Address</h3>
                            <p>
                                No.43/A, East Gandhi Nagar,<br/>
                                Auxilium Road, <em>Katpadi</em>,<br/>
                                <em>Vellore</em> - 632006.
                            </p>
                        </div>
                        <div className='container_1'>
                            <h3>Phone</h3>
                            <p>9600 580 990</p>
                        </div>
                    </div>
                    <div className='footer_container'>
                        <div className='footer_menu'>
                            <a href='#home'>Home</a>
                            <a href='#about'>About Us</a>
                            <a href='#service'>Service</a>
                            <a href='#portfolio'>Portfolio</a>
                            <a href='#contact'>Contact Us</a>
                        </div>
                    </div>
                    <div className='footer_container footer_width_social'>
                        <div className='footer_social'>
                            <h3>Follow Us On</h3>
                            <div className='social_icons'>
                                <div className='icon'>
                                    <img src='./images/footer/behance.png' alt='trulle behance'/>
                                </div>
                                <div className='icon'>
                                    <img src='./images/footer/linkedin.png' alt='trulle linkedin'/>
                                </div>
                                <div className='icon'>
                                    <img src='./images/footer/insta.png' alt='trulle insta'/>
                                </div>
                                <div className='icon'>
                                    <img src='./images/footer/fb.png' alt='trulle fb'/>
                                </div>
                                <div className='icon'>
                                    <img src='./images/whatsapp.svg' alt='trulle whatsapp'/>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>   
                </footer>     
            </div>
            {/* <div className='footer_image_container'>
                <img src='./images/footer_image.png' className='footer_image'/>
            </div> */}
        </>
    )
}
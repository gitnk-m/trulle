import './footer.css'
export default function Footer (){
    return(
        <>
            <div className='footer'>
                <h1>CONTACT US</h1>
                <div className='footer_div'>
                    <div className='footer_container'>
                        <div className='container_1'>
                            <h3>Address</h3>
                            <p>
                                No.43/A, East Gandhi Nagar,<br/>
                                Auxilium Road, Katpadi,<br/>
                                Vellore - 632006.
                            </p>
                        </div>
                        <div className='container_1'>
                            <h3>Phone</h3>
                            <p>9600 580 990</p>
                        </div>
                    </div>
                    <div className='footer_container'>
                        <div className='footer_menu'>
                            <h3>Home</h3>
                            <h3>About Us</h3>
                            <h3>Service</h3>
                            <h3>Profolio</h3>
                            <h3>Contact Us</h3>
                        </div>
                    </div>
                    <div className='footer_container footer_width_social'>
                        <div className='footer_social'>
                            <h3>Follow Us On</h3>
                            <div className='social_icons'>
                                <div className='icon'>
                                    <img src='./images/behance.png' alt='behance'/>
                                </div>
                                <div className='icon'>
                                    <img src='./images/linkedin.png' alt='behance'/>
                                </div>
                                <div className='icon'>
                                    <img src='./images/insta.png' alt='behance'/>
                                </div>
                                <div className='icon'>
                                    <img src='./images/fb.png' alt='behance'/>
                                </div>
                                <div className='icon'>
                                    <img src='./images/share.png' alt='behance'/>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>        
            </div>
            <div className='footer_image_container'>
                <img src='./images/footer_image.png' className='footer_image'/>
            </div>
        </>
    )
}
import './marqee.css'
export default function Marquee({ children, speed }){
    // const image = `./images/${children}`
    return(
        // <div className='marquee' style={{animationDuration: '2000ms'}}>
        <div className='marquee' style={{animationDuration: `${speed}`}}>
        {/* <div className='marquee'> */}
            {/* <img src={children}/> */}
            {/* <img src={children}/> */}
           
            {children}
            {children}
            {children}
            {children}
            {children}
        </div>
    );
}
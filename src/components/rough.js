import { useState } from 'react';
// import './rough.css'
import { useEffect } from 'react';

export default function Rough(){

    const mainanimate = {
        animation: 'levitate 10s infinite'
    }
    const main_key = `@keyframes levitate {0%{transform: translateY(-50px);}50%{transform: translateY(50px);}100%{transform: translateY(-50px);}}`

    const one_animate = {
        animation: 'one_animation 15s linear infinite'
    }
    const [one_key, setone_key]=useState([])
    const [one_keyframe, setone_keyframe] = useState()
    useEffect(()=>{
        const centerX = 55; // Center X coordinate
        const centerY = 8; // Center Y coordinate
        const radiusX = 60; // Semi-major axis length
        const radiusY = -10; // Semi-minor axis length
        const numberOfPoints = 360; // Number of points to generate (one for each degree)

        const points = [];
        const temp = ['@keyframes one_animation{']
        let pre = 75
        let z = 0
        let angle = 270

        for (let i = 0; i < numberOfPoints; i++) {
            const angle = (Math.PI * 2 * i) / numberOfPoints;
            const x = centerX + radiusX * Math.cos(angle);
            const y = centerY + radiusY * Math.sin(angle);
            const top = parseFloat(x.toFixed(1))
            const left = parseFloat(y.toFixed(1))
            points.push({ top, left } );

        }

        points.map((item, i)=>{
            temp.push(`${pre.toFixed(1)}%{top:${item.left}%;left:${item.top}%;z-index:${z};transform:rotateY(${angle}deg);}`)
            if(pre>=100){
                pre = 0
                angle = 0
            }else{
                pre += 0.278
                angle += 1
            }
            if(i<=90){
                z=0
            }else if(i>90 && i<=180){
                z=0
            }else if(i>180 && i<=270){
                z=2
            }else if(i>270 && i<=360) {
                z=2
            }else{
                z=0
            }
        })
        setone_keyframe(temp.join(''))

    },[])

    const two_animate = {
        animation: 'two_animation 15s linear infinite'
    }
    const [two_key, settwo_key]=useState([])
    const [two_keyframe, settwo_keyframe] = useState()

    const three_animate = {
        animation: 'three_animation 15s linear infinite'
    }
    const [three_key, setthree_key]=useState([])
    const [three_keyframe, setthree_keyframe] = useState()
    useEffect(()=>{
        const centerX = 55; // Center X coordinate
        const centerY = 8; // Center Y coordinate
        const radiusX = 60; // Semi-major axis length
        const radiusY = -10; // Semi-minor axis length
        const numberOfPoints = 360; // Number of points to generate (one for each degree)

        const points = [];
        const temp = ['@keyframes three_animation{']
        let pre = 75
        let z = 0
        let angle = 270

        for (let i = 0; i < numberOfPoints; i++) {
            const angle = (Math.PI * 2 * i) / numberOfPoints;
            const x = centerX + radiusX * Math.cos(angle);
            const y = centerY + radiusY * Math.sin(angle);
            const top = parseFloat(x.toFixed(1))
            const left = parseFloat(y.toFixed(1))
            points.push({ top, left } );

        }

        points.map((item, i)=>{
            temp.push(`${pre.toFixed(1)}%{top:${item.left}%;left:${item.top}%;z-index:${z};transform:rotateY(${angle}deg);}`)
            if(pre>=100){
                pre = 0
                angle = 0
            }else{
                pre += 0.278
                angle += 1
            }
            if(i<=90){
                z=0
            }else if(i>90 && i<=180){
                z=0
            }else if(i>180 && i<=270){
                z=2
            }else if(i>270 && i<=360) {
                z=2
            }else{
                z=0
            }
        })
        setthree_keyframe(temp.join(''))

    },[])
    

    return(
        // <div className='home_wrapper'>
        //     <h1 className='a1'>HOME</h1>
        //     <h1 className='a2'>HOME</h1>
        //     <h1 className='a3'>HOME</h1>
        //     <h1 className='a4'>HOME</h1>
        //     <h1 className='a5'>HOME</h1>
        //     <h1 className='a6'>HOME</h1>
        //     <div className='a7con'>
        //         <h1 className='a7'>HOME</h1>
        //     </div>
        //     <h1 className='a8'>HOME</h1>
        // </div>
        <div className="landing_image_container">
            {/* <div className="landing_container" style={{...mainanimate}}> */}
            <div className="landing_container">
                <style>{main_key}</style>
                <div className="main">
                    <img src="./images/landing/landing.png"/>
                </div>
                {/* <div className="one" style={{...one_animate}}> */}
                <div className="one">
                    <style>{one_keyframe}</style>
                    <img src="./images/landing/j.png"/>
                </div>
                {/* <div className="two" style={{...two_animate}}> */}
                <div className="two">
                    {/* <style>{two_keyframe}</style> */}
                    <img src="./images/landing/g.png"/>
                </div>
                <div className="three" style={{...three_animate}}>
                {/* <div className="three"> */}
                    <style>{three_keyframe}</style>
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
    );
}
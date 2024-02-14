import { useEffect } from 'react';
import './testimonial.css'
export default function Testimonial ({performance, test_content, test_by, rating}){
    const rating_array = []
    for(let i=0; i<=4; i++){
        if(rating>0){
            rating_array.push('./images/filled_star.png')
        } else{
            rating_array.push('./images/unfilled_star.png')
        }
        rating--;
    }
    
    return (
        <div className='testimonial_container'>
            <div className='test_title'>
                <p>{performance}</p>
                <div className='ratings'>                    
                    {rating_array.map((rating, key)=>{
                        return(
                            <div className='rating'>
                                <img src={rating} alt='star'/>
                            </div>
                        )
                    })}
                </div>                        
            </div>
            <div className='test_content'>
                <p>{test_content}</p>
                <h4>{test_by}</h4>
                <img src='./images/testimonial_dot.png' alt='dot' className='testimonial_dot'/>
            </div>
        </div>
    )
}
import { useState } from "react"
import axios from "axios";

export default function TestCheck(){
    const [appl, setappl] = useState({
        name:'', 
        catagory:'', 
        type:'', 
        range:'', 
        price:'', 
        emi:'', 
        feature:'', 
        description:'', 
        techspec:'', 
        date:'', 
        image1:'', 
        image2:'', 
        image3:'', 
        image4:''
    })
    const applChange = (e)=>{
        const {name, value} = e.target;
        setappl((preData)=>({
            ...preData,
            [name]:value
        }))
    }
    const applImage = (e)=>{
        const name = e.target.name
        const imageFile = e.target.files[0];
        setappl({ ...appl, [name]: imageFile });
    }
    const applSubmit = (e)=>{
        e.preventDefault()
        console.log(appl)
        
        const formData = new FormData();
        formData.append('name',appl.name);
        formData.append('catagory',appl.catagory);
        formData.append('type',appl.type);
        formData.append('range',appl.range);
        formData.append('price',appl.price);
        formData.append('emi',appl.emi);
        formData.append('feature',appl.feature);
        formData.append('description',appl.description);
        formData.append('techspec',appl.techspec);
        formData.append('date',appl.date);
        formData.append('image1',appl.image1);
        formData.append('image2',appl.image2);
        formData.append('image3',appl.image3);
        formData.append('image4',appl.image4);
        
    
        axios.post('http://localhost:8801/addProducts', formData)
        .then(res=>{
            if (res.status===200){
                console.log("success")
            } else{
                console.error('Server returned an error status:', res.status);
            }
        })
        .catch(error=>{
            console.error('Error:',error);
        })
    }
    return(
        <form onSubmit={applSubmit} style={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:"center", flexDirection:"column"}}>
            <input
            type="text"
            name="name"
            value={appl.name}
            placeholder="Name"
            onChange={applChange}
            />
            <input
            type="text"
            name="catagory"
            value={appl.catagory}
            placeholder="Catagory"
            onChange={applChange}
            />
            <input
            type="text"
            name="type"
            value={appl.type}
            placeholder="Type"
            onChange={applChange}
            />
            <input
            type="text"
            name="range"
            value={appl.range}
            placeholder="Range"
            onChange={applChange}
            />
            <input
            type="text"
            name="price"
            value={appl.price}
            placeholder="price"
            onChange={applChange}
            />
            <input
            type="text"
            name="emi"
            value={appl.emi}
            placeholder="emi"
            onChange={applChange}
            />
            <input
            type="text"
            name="feature"
            value={appl.feature}
            placeholder="feature"
            onChange={applChange}
            />
            <input
            type="text"
            name="description"
            value={appl.description}
            placeholder="description"
            onChange={applChange}
            />
            <input
            type="text"
            name="techspec"
            value={appl.techspec}
            placeholder="techspec"
            onChange={applChange}
            />
            <input
            type="date"
            name="date"
            value={appl.date}
            // placeholder="date"
            onChange={applChange}
            />
            <input
            type="file"
            name="image1"
            accept="image/**"
            onChange={applImage}
            />
            <input
            type="file"
            name="image2"
            accept="image/**"
            onChange={applImage}
            />
            <input
            type="file"
            name="image3"
            accept="image/**"
            onChange={applImage}
            />
            <input
            type="file"
            name="image4"
            accept="image/**"
            onChange={applImage}
            />
            <input
            type="submit"
            value="Submit"
            />
        </form>
    )
}
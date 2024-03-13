import { useEffect, useState } from 'react';
import './project.css'

// export default function Project ({project_image, project_title, project_content, project_for}){
    export default function Project ({projects}){
    const [index, setIndex] = useState(0)
    // console.log(projects)
    const [project_image, setproject_image] =useState(projects[index].project_image)
    const [project_title, setproject_title] =useState(projects[index].project_title)
    const [project_content, setproject_content] =useState(projects[index].project_content)
    const [project_for, setproject_for] =useState(projects[index].project_for)


    const [projectChange, setProjectChange] = useState("")
    useEffect(()=>{
        if(projectChange.length!=0){
            const timeoutId = setTimeout(() => {
                setProjectChange('');
            }, 500);
            return () => clearTimeout(timeoutId);
        }        
    },[projectChange])

    const upProject = () =>{
        setProjectChange("upProject .5s ease-in-out");
        const timeoutCss = setTimeout(() => {
            setProjectChange('');
        }, 500);
        const timeoutCont = setTimeout(() => {
            if(index<projects.length-1){
                setproject_image(projects[index+1].project_image)
                setproject_title(projects[index+1].project_title)
                setproject_content(projects[index+1].project_content)
                setproject_for(projects[index+1].project_for)
                setIndex(index+1)
            }else{
                setproject_image(projects[0].project_image)
                setproject_title(projects[0].project_title)
                setproject_content(projects[0].project_content)
                setproject_for(projects[0].project_for)
                setIndex(0)
            }
        }, 250);
        return () => {clearTimeout(timeoutCss);clearTimeout(timeoutCont);}
    }
    const downProject = () =>{
        setProjectChange("downProject .5s ease-in-out");
        const timeoutCss = setTimeout(() => {
            setProjectChange('');
        }, 500);
        const timeoutCont = setTimeout(() => {
            if(index>0){
                setproject_image(projects[index-1].project_image)
                setproject_title(projects[index-1].project_title)
                setproject_content(projects[index-1].project_content)
                setproject_for(projects[index-1].project_for)
                setIndex(index-1)
            }else{
                setproject_image(projects[projects.length-1].project_image)
                setproject_title(projects[projects.length-1].project_title)
                setproject_content(projects[projects.length-1].project_content)
                setproject_for(projects[projects.length-1].project_for)
                setIndex(projects.length-1)
            }
        }, 250);
        return () => {clearTimeout(timeoutCss);clearTimeout(timeoutCont);}
    }
    return(
        <>
        <div className='project_container' style={{animation:projectChange}}>
            <div className='project_image'>
            <div className='project_side'>
                <header>
                <h1>{project_for}</h1>
                </header>
            </div>   
                <img src={project_image} alt='client-1'/>
            </div>
            <div className='project_description'>
                <header>
                    <h3>{project_title}</h3>
                </header>
                <p>{project_content}</p>
                {/* <button className='btn project_btn_colour'>View <img src='./images/button_arrow.png'></img></button> */}
            </div>                                                      
        </div>
        <div className='arrow_btn_container'>
            {/* <div className='arrow_btn' onClick={()=>setProjectChange("upProject .5s ease-in-out")}> */}
            <div className='arrow_btn' onClick={upProject}>
                <img src='./images/up.png' alt='trulle'/>
            </div>
            {/* <div className='arrow_btn' onClick={()=>setProjectChange("downProjectt .5s ease-in-out")}> */}
            <div className='arrow_btn' onClick={downProject}>
                <img src='./images/down.png' alt='trulle'/>
            </div>
        </div>
        </>
    );
}
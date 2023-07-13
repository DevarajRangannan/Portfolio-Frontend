import React, {useState, useEffect} from 'react'
import { CONTAINER, TITLE, MAIN_SECTION, PROJECTS_CONTAINER, PROJECT_POD, PROJECT_POD_IMAGE_OVERLAY, PROJECT_POD_TITLE} from './styles/Projects'
import axios from 'axios';
import Wave  from "../asserts/wave-white.svg"

let flag = true;

const projectHightlight = function(e){
  const childElement = e.querySelector(".absolute")
  childElement.classList.add("md:bg-black/50")
  childElement.classList.remove("md:opacity-0")
  childElement.classList.add("md:opacity-100")
  childElement.classList.add("border-2")

}

const projectHightlightRemove = function(e){
  const childElement = e.querySelector(".absolute")
  childElement.classList.remove("md:bg-black/50")
  childElement.classList.remove("md:opacity-100")
  childElement.classList.add("md:opacity-0")
}

const projectHightlightOnTouch = (e)=>{
  const childElement = e.querySelector(".absolute")
  childElement.classList.add("opacity-0")
}


export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loadedImages, setLoadedImages] = useState([]);

  const handleImageLoad = (index)=>{
    setLoadedImages(
      (previousLoadedImages => {
        const updatedLoadedImages = [...previousLoadedImages];
        updatedLoadedImages[index] = true;
        return updatedLoadedImages;
      })
    )
  }
  const loadImage = (src, index)=>{
    const image = new Image();
    image.src = src;
    image.onload = ()=>{handleImageLoad(index)}
  }

  
  if((projects.length > 0) && flag){

    loadImage("https://deva-rangan-test.s3.ap-south-1.amazonaws.com/clickHere.png", 2)
    flag = false;
    projects.forEach((project, index) =>{
      loadImage(project.imageURL, index)
    })
  }

  const data = async()=>{
    try{
      const res = await axios(process.env.REACT_APP_METADATA_RECENT_PROJECTS)
      setProjects(await res.data)
    }catch(e){
      console.log(e);
    }
    
  }
  
  useEffect(()=>{
    data()
  },[])

  return (
    <div id='projects' className={`${CONTAINER}`}>
        <div className={`${TITLE}`}>Projects</div>
        <div className={`${MAIN_SECTION}`}>
          {projects.length > 0 ? 
            projects.map((project, i)=>{
              return loadedImages[i]?
                <div key={i} className={`${PROJECTS_CONTAINER}`} onMouseEnter={(e) => projectHightlight(e.target.parentElement)} onMouseLeave={(e) => { projectHightlightRemove(e.target.parentElement) }} onClick={(e) => { projectHightlightOnTouch(e.target.parentElement) }}>
                  <a href={projects[i].projectLink} target='_blank' rel="noreferrer">
                    <div className={`${PROJECT_POD}`}>
                      <img className={` ${PROJECT_POD}`} src={project.imageURL} alt={`Project-${i+1}`} />
                      <div className={`${PROJECT_POD_IMAGE_OVERLAY}`}>View Project</div>
                    </div>
                    <h1 className={`${PROJECT_POD_TITLE}`}>{project.title}</h1>
                  </a>
                </div>
                :
                <div key={i} className='animate-pulse overflow-hidden'>
                  <div className={`${PROJECT_POD} bg-gray-500 `}>
                    <img className={` invisible`} width={1920} height={1080} alt=' ' />
                  </div>
                  <h1 className={`${PROJECT_POD_TITLE} text-gray-500`}>{project.title}</h1>
                </div>
            })
          :
            <>
              <div className='overflow-hidden'>
                <div className={`${PROJECT_POD} bg-gray-500 animate-pulse overflow-hidden`}>
                  <img  className={` invisible`} width={1920} height={1080} alt=' ' />
                </div>
                <h1 className={`${PROJECT_POD_TITLE} text-gray-500`}>Project-1</h1>
              </div>

              <div className='overflow-hidden'>
                <div className={`${PROJECT_POD} bg-gray-500 animate-pulse overflow-hidden`}>
                  <img  className={` invisible`} width={1920} height={1080} alt=' ' />
                </div>
                <h1 className={`${PROJECT_POD_TITLE} text-gray-500`}>Project-2</h1>
              </div>
            </>
          }
          {
            loadedImages[2]?
            <a href={"all-projects"} className={`${PROJECTS_CONTAINER} md:col-span-2 lg:col-span-1  md:w-[50%] lg:w-full md:mx-auto`} onMouseEnter={(e)=>projectHightlight(e.target.parentElement)} onMouseLeave={(e)=>{projectHightlightRemove(e.target.parentElement)}} onTouchStart={(e)=>{projectHightlightOnTouch(e.target.parentElement)}}>
              <div className='relative '>
                <img className={`${PROJECT_POD} `} src={"https://deva-rangan-test.s3.ap-south-1.amazonaws.com/clickHere.png"} alt="click-here" />
                <div className={`${PROJECT_POD_IMAGE_OVERLAY}`}>View All Project</div>
              </div>
              <h1 className={`${PROJECT_POD_TITLE}`}>View All Projects</h1>
            </a>
            :
            <div className='md:col-span-2 lg:col-span-1  md:w-[50%] lg:w-full md:mx-auto overflow-hidden'>
              <div className={`${PROJECT_POD} bg-gray-500 animate-pulse overflow-hidden`}>
                <img  className={`invisible`} width={1920} height={1080} alt=' ' />
              </div>
              <h1 className={`${PROJECT_POD_TITLE} text-gray-500`}>View All Projects</h1>
            </div>
            
          }
          
        </div>
        <div className={`h-[10rem]  bg-cover	`} style={{backgroundImage:`url(${Wave})`}}></div>
    </div>
  )
}

import React, {useEffect, useState} from 'react'
import Wave  from "../asserts/wave-white.svg"
import BlackWave  from "../asserts/wave-black.svg"
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { CONTAINER, TITLE, MAIN_SECTION, PROJECTS_CONTAINER, PROJECT_POD, PROJECT_POD_IMAGE_OVERLAY, PROJECT_POD_TITLE } from './styles/AllProjectsPage'

let flag = true;
const System_Design_URL = "https://deva-rangan-test.s3.ap-south-1.amazonaws.com/System_Design.png"

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

export default function AllProjectsPage() {

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

  loadImage(System_Design_URL, 0)


  if((projects.length > 0) && flag){
    flag = false;
    projects.forEach((project, index) =>{
      loadImage(project.imageURL, index+1)
      console.log(project.imageURL);
    })
  }

  const data = async()=>{
    try{
      const res = await axios(process.env.REACT_APP_METADATA_PROJECTS)
      setProjects(await res.data)  
    }catch(e){
      console.log(e);
    }
    
  }

  useEffect(()=>{
    data()
  },[])

  return (
    <div id='logo' className=' bg-[#212121]'>
      <div className='absolute z-10 text-white m-2'>
        <Link to="/" ></Link>
        <Logo />
      </div>
      
      <div>
        <div className='h-fit  flex justify-center item-center relative'>
          {
            loadedImages[0]?
              <img className='lg:w-[75%]' src={System_Design_URL} alt="system-design" width={1920} height={1080}/>
              :
              <img className='lg:w-[75%] bg-blue-500 invisible' alt="" width={1920} height={1080}/>              
          }          
        </div>
        <div className={`h-[10rem]  bg-cover`} style={{ backgroundImage: `url(${Wave})` }}></div>
      </div>

      <div id='projects' className={`${CONTAINER}`}>
        <div className={`${TITLE}`}>Projects</div>
        <div className={`${MAIN_SECTION}`}>
          {projects.length > 0 ?
            projects.map((project, i) => {
              return loadedImages[i+1] ?
                <div key={i} className={`${PROJECTS_CONTAINER}`} onMouseEnter={(e) => projectHightlight(e.target.parentElement)} onMouseLeave={(e) => { projectHightlightRemove(e.target.parentElement) }} onClick={(e) => { projectHightlightOnTouch(e.target.parentElement) }}>
                  <a href={projects[i].projectLink} target='_blank' rel="noreferrer">
                    <div className={`${PROJECT_POD} border-2 border-black`}>
                      <img className={` ${PROJECT_POD}`} src={project.imageURL} alt={`Project-${i + 1}`} />
                      <div className={`${PROJECT_POD_IMAGE_OVERLAY}`}>View Project</div>
                    </div>
                    <h1 className={`${PROJECT_POD_TITLE} text-[#212121]`}>{project.title}</h1>
                  </a>
                </div>
                :
                <div key={i} className='animate-pulse overflow-hidden'>
                  <div className={`${PROJECT_POD} bg-gray-500  `}>
                    <img className={` invisible`} width={1920} height={1080} alt=' ' />
                  </div>
                  <h1 className={`${PROJECT_POD_TITLE} text-gray-300`}>{project.title}</h1>
                </div>
            })
            :
            <>
              {['','',''].map((e, i)=>{
                return <div key={i} className='animate-pulse overflow-hidden'>
                  <div className={`${PROJECT_POD} bg-gray-500  `}>
                    <img className={` invisible`} width={1920} height={1080} alt=' ' />
                  </div>
                  <div className={`mt-3 w-[80%] mx-auto bg-gray-300  h-[1.5rem]`}></div>
                </div>
              })}
            </>
          }
          

        </div>
        <div className={`h-[10rem]  bg-cover	`} style={{ backgroundImage: `url(${BlackWave})` }}></div>
      </div>
      
    </div>
    
  )
}

import React, {useState, useEffect} from 'react'
import { CONTAINER, TITLE, MAIN_SECTION, PROJECTS_CONTAINER, PROJECT_POD, PROJECT_POD_IMAGE_OVERLAY, PROJECT_POD_TITLE} from './styles/Projects'
import axios from 'axios';
import Wave  from "../asserts/wave-white.svg"
import grayTemplate from '../asserts/gray_template.png';



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
    <div id='projects' className={`${CONTAINER}`}>
        <div className={`${TITLE}`}>Projects</div>
        <div className={`${MAIN_SECTION}`}>
          {
            projects.length>0 ? 
              <>
                <div  className={`${PROJECTS_CONTAINER}`} onMouseEnter={(e)=>projectHightlight(e.target.parentElement)} onMouseLeave={(e)=>{projectHightlightRemove(e.target.parentElement)}} onClick={(e)=>{projectHightlightOnTouch(e.target.parentElement)}}>
                          <a href={projects[0].projectLink}>
                            <div className={`${PROJECT_POD}`}>
                              <img  className={` ${PROJECT_POD}`}  src={projects[0].imageURL} alt="Project-1" />
                              <div className={`${PROJECT_POD_IMAGE_OVERLAY}`}>View Project</div>
                            </div>
                            <h1 className={`${PROJECT_POD_TITLE}`}>{projects[0].title}</h1>
                          </a>      
                </div>

                <div  className={`${PROJECTS_CONTAINER}`} onMouseEnter={(e)=>projectHightlight(e.target.parentElement)} onMouseLeave={(e)=>{projectHightlightRemove(e.target.parentElement)}} onClick={(e)=>{projectHightlightOnTouch(e.target.parentElement)}}>
                    <a href={projects[1].projectLink}>
                      <div className={`${PROJECT_POD}`}>
                        <img  className={` ${PROJECT_POD}`}  src={projects[1].imageURL} alt="Project-2" />
                        <div className={`${PROJECT_POD_IMAGE_OVERLAY}`}>View Project</div>
                      </div>
                      <h1 className={`${PROJECT_POD_TITLE}`}>{projects[1].title}</h1>
                    </a>   
                </div>

              </>:
              <> 
                <img className={`${PROJECT_POD} bg-gray-500 animate-pulse	`} src={grayTemplate} alt="" />
                <img className={`${PROJECT_POD} bg-gray-500 animate-pulse	`} src={grayTemplate} alt="" />
              </>
          }
          {
            projects.length>0 ? 
            <a href="/#" className={`${PROJECTS_CONTAINER} md:col-span-2 lg:col-span-1  md:w-[50%] lg:w-full md:mx-auto`} onMouseEnter={(e)=>projectHightlight(e.target.parentElement)} onMouseLeave={(e)=>{projectHightlightRemove(e.target.parentElement)}} onTouchStart={(e)=>{projectHightlightOnTouch(e.target.parentElement)}}>
              <div className='relative '>
                <img className={`${PROJECT_POD} `} src={"https://deva-rangan-test.s3.ap-south-1.amazonaws.com/clickHere.png"} alt="click-here" />
                <div className={`${PROJECT_POD_IMAGE_OVERLAY}`}>View All Project</div>
              </div>
              <h1 className={`${PROJECT_POD_TITLE}`}>View All Projects</h1>
            </a>:
              <img className={`${PROJECT_POD} bg-gray-500 animate-pulse md:col-span-2 lg:col-span-1  md:w-[50%] lg:w-full md:mx-auto`} src={grayTemplate} alt="" />
          }
          
        </div>
        <div className={`h-[10rem]  bg-cover	`} style={{backgroundImage:`url(${Wave})`}}></div>

    </div>
  )
}

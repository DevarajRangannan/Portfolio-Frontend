import React, {useState, useEffect} from 'react'
import { CONTAINER, md_CONTAINER, TITLE, MAIN_SECTION, SKILLS_DOMAIN, LIST_STYLE } from './styles/Skills'
import Wave  from "../asserts/wave-black.svg"
import axios from 'axios';

export default function Skills() {

  const [primarySkills, setPrimarySkills] = useState([])
  const [secondarySkills, setSecondarySkills] = useState([])
  const [subsidiarySkills, setSubsidiarySkills] = useState([])

  const getData = async ()=>{
    try{
      const URL = process.env.REACT_APP_METADATA_SKILLS
      const fetchData = await axios.get(URL)
 
      setPrimarySkills(fetchData.data.primarySkills)
      setSecondarySkills(fetchData.data.secondarySkills)
      setSubsidiarySkills(fetchData.data.subsidiarySkills)
    }
    catch(e){
      
      console.log(e);
    }
  }

  useEffect(()=>{
    getData()
  },[])

  const LoadingAnim = ()=>{
    return <div className={` w-full animate-pulse`}>
            <p className='w-[50%] rounded h-3 bg-gray-500 mx-auto	mb-3' ></p>
            <p className='w-[45%] rounded h-3 bg-gray-500 mx-auto	mb-3 ' ></p>
            <p className='w-[50%] rounded h-3 bg-gray-500 mx-auto	mb-3' ></p>
            <p className='w-[30%] rounded h-3 bg-gray-500 mx-auto	mb-3' ></p>
            <p className='w-[50%] rounded h-3 bg-gray-500 mx-auto	mb-3' ></p>
          </div>
  }

  return (
    <>
        <div id='skills' className={`${CONTAINER} ${md_CONTAINER} `}>
          <div className={`${TITLE} `}>Skills</div>

          <div className={`${MAIN_SECTION}`}>
            <div>
              <h3 className={`${SKILLS_DOMAIN}`}>Programming Languages</h3>
              {
                primarySkills.length > 0? 
                  <ul className={`${LIST_STYLE}`}>
                    {primarySkills.map((item)=>{
                      return <li key={item}>{item}</li>
                    })}
                  </ul>: 
                  LoadingAnim()
              }
                
            </div>
            <div>
              <h3 className={`${SKILLS_DOMAIN}`}>Web Technologies</h3>
              
              {
                primarySkills.length > 0? 
                  <ul className={`${LIST_STYLE}`}>
                    {secondarySkills.map((item)=>{
                      return <li key={item}>{item}</li>
                    })}
                  </ul>: 
                  LoadingAnim()
              }
              
            </div>
            <div>
              
              <h3 className={`${SKILLS_DOMAIN}`}>Other Important Skills</h3>
              

              {
                primarySkills.length > 0? 
                  <ul className={`${LIST_STYLE}`}>
                    {subsidiarySkills.map((item)=>{
                      return <li key={item}>{item}</li>
                    })}
                  </ul>: 
                  LoadingAnim()
              }
            </div>
          </div>

          <div className={`h-[10rem]  bg-cover	`} style={{backgroundImage:`url(${Wave})`}}></div>
        </div>

      </>
  )
}


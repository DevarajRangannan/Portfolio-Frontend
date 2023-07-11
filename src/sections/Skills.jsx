import React, {useRef, useState, useEffect} from 'react'
import { CONTAINER, md_CONTAINER, TITLE, MAIN_SECTION, SKILLS_DOMAIN, LIST_STYLE } from './styles/Skills'
import Wave  from "../asserts/wave-black.svg"
import axios from 'axios';
import {  useDispatch } from 'react-redux';
import { Act_Skill_section_dynamic_height } from '../redux/actions/skills_section_height';

let dispatch;
let setNewHeight;

export default function Skills() {

  let divRef = useRef(null);
  dispatch = useDispatch()

  const [primarySkills, setPrimarySkills] = useState([])
  const [secondarySkills, setSecondarySkills] = useState([])
  const [subsidiarySkills, setSubsidiarySkills] = useState([])


  setNewHeight = ()=>{
    setTimeout(()=>{
      Act_Skill_section_dynamic_height.data = divRef.current.clientHeight
      dispatch(Act_Skill_section_dynamic_height)
    },0)    
  }

  const getData = async ()=>{
    try{
      const URL = process.env.REACT_APP_METADATA_SKILLS
      const fetchData = await axios.get(URL)
      
      setPrimarySkills(fetchData.data.primarySkills)
      setSecondarySkills(fetchData.data.secondarySkills)
      setSubsidiarySkills(fetchData.data.subsidiarySkills)

      setNewHeight()
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
        <div id='skills' ref={divRef} className={`${CONTAINER} ${md_CONTAINER}`}>
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
                secondarySkills.length > 0? 
                  <ul className={`${LIST_STYLE}`}>
                    {secondarySkills.map((item)=>{
                      return <li key={item}>{item}</li>
                    })}
                  </ul>: 
                  LoadingAnim()
              }
              
            </div>
            <div className='md:col-span-2 lg:col-span-1  md:w-[50%] lg:w-full md:mx-auto  '>
              
              <h3 className={`${SKILLS_DOMAIN}`}>Other Important Skills</h3>     
              {
                subsidiarySkills.length > 0? 
                  <ul className={`${LIST_STYLE}`}>
                    {
                      subsidiarySkills.map((item)=>{
                        
                        return <li key={item}>{item}</li>
                      })
                    }
                  </ul>
                  : 
                  LoadingAnim()    
              }
            </div>
          </div>

          <div className={`h-[10rem]  bg-cover	`} style={{backgroundImage:`url(${Wave})`}}></div>
        </div>

      </>
  )
}


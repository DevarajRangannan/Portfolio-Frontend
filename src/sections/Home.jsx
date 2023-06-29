import React, {useState} from 'react'
import { CONTAINER, md_CONTAINER, MAIN_SECTION, md_MAIN_SECTION, PROFILE, md_PROFILE, TEXT_CONTAINER , md_TEXT_CONTAINER, NAME, md_NAME, DOAMIN, md_DOAMIN, RESUME_BTN, md_RESUME_BTN, WAVE, md_WAVE} from './styles/Home'
import axios from 'axios'
import profile from "../asserts/profile.png"



export default function Home() {
  const URL = process.env.REACT_APP_METADATA_RESUME

  const [resumeURL, setresumeURL] = useState("")
  
  const getData = async()=>{
    try{
      const response = await axios.get(URL);
      const data = await response.data
      setresumeURL(data.URL)
      console.log(data.URL);
    }
    catch(e){
      console.log(e);
    }

  }

  getData()


  return (
    <>
        <div id='home' className={`${CONTAINER} ${md_CONTAINER}`}>
          <div className={`${MAIN_SECTION} ${md_MAIN_SECTION}  `}>
            <img className={`${PROFILE} ${md_PROFILE}`} src={profile} alt="profilePic" />
            <div className={`${TEXT_CONTAINER} ${md_TEXT_CONTAINER}`}>
              <div className={`${NAME} ${md_NAME}`}>Devaraj Rangannan</div>
              <div className={`${DOAMIN}, ${md_DOAMIN}`}>Full Stack Developer</div>
              <a href={resumeURL} target='blank'>
                <button className={`${RESUME_BTN} ${md_RESUME_BTN}`}>{resumeURL===""?"Loading...":"Resume Download"}</button>
              </a>
            </div>
          </div>
            <div className={`${WAVE} ${md_WAVE}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path  fillOpacity="1" d="M0,160L40,144C80,128,160,96,240,85.3C320,75,400,85,480,112C560,139,640,181,720,176C800,171,880,117,960,128C1040,139,1120,213,1200,229.3C1280,245,1360,203,1400,181.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
          </div>
        </div>
      </>
  )
}
import React from 'react'
import { CONTAINER, md_CONTAINER, TITLE, BODY_CONTAINER, EMAIL_ADDRESS, SUB_BODY_CONTAINER, LOGO_CONTAINER } from './styles/Contact'

export default function Contact() {
  return (
    <div id='contact' className={`${CONTAINER} ${md_CONTAINER}`}>
        
        <h1 className={TITLE}>Contact</h1>

        <div className={BODY_CONTAINER}>
            <h1 className={EMAIL_ADDRESS} >devarangan2002@gmail.com</h1>

            <div className={SUB_BODY_CONTAINER}>
                <a  href="https://in.linkedin.com/in/devaraj-rangannan" target="_blank" rel="noreferrer"><img src="https://devarajrangannan.github.io/Images/LinkedIn_logo.png" alt="LinkedIn_logo" className={LOGO_CONTAINER}/></a>

                <a  href="mailto:devarangan2002@gmail.com" target="_blank" rel="noreferrer"><img src="https://devarajrangannan.github.io/Images/Gmail_logo.png" alt="Gmail_logo" className={LOGO_CONTAINER}/></a>

                <a  href="https://github.com/DevarajRangannan" target="_blank" rel="noreferrer"><img src="https://devarajrangannan.github.io/Images/Git_logo.png" alt="Github_logo" className={LOGO_CONTAINER}/></a>

                <a  href="https://www.hackerrank.com/Deva_Rangan" target="_blank" rel="noreferrer"><img src="https://deva-rangan-test.s3.ap-south-1.amazonaws.com/HackerRank_logo.png" alt="CodeChef_logo" className={LOGO_CONTAINER}/></a>
            </div>
        </div>
        
    </div>
  )
}

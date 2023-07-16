import React from 'react'
import { CONTAINER, md_CONTAINER, TITLE, MAIN_BODY, EDUCATION_CONTAINER, COURSE_CONTAINER, COURSE_TITLE, COURSE_DES, COURSE_MARK } from './styles/Education'
import Wave  from "../asserts/wave-black.svg"

export default function Education() {
  return (
      <div id='education' className={`${CONTAINER} ${md_CONTAINER} `}>
          <h1 className={TITLE}>Education</h1>
          <div className={MAIN_BODY}>
              <div className={EDUCATION_CONTAINER}>
                  <div className={COURSE_CONTAINER}>
                      <h2 className={COURSE_TITLE}>DEGREE</h2>
                      <h3 className={COURSE_DES}>Bachelor Of Computer Application ( 2020-2023 )</h3>
                      <h4 className={COURSE_MARK}>Mark : 75%</h4>
                  </div>

                  <div className={COURSE_CONTAINER}>
                      <h2 className={COURSE_TITLE}>12 <sup>Th</sup></h2>
                      <h3 className={COURSE_DES}>State Board ( 2018-2019 )</h3>
                      <h4 className={COURSE_MARK}>Mark : 52%</h4>
                  </div>

                  <div className={COURSE_CONTAINER}>
                      <h2 className={COURSE_TITLE}>11<sup> Th</sup></h2>
                      <h3 className={COURSE_DES}>State Board ( 2017-2018 )</h3>
                      <h4 className={COURSE_MARK}>Mark : 48%</h4>
                  </div>

                  <div className={COURSE_CONTAINER}>
                      <h2 className={COURSE_TITLE}>10<sup> Th</sup></h2>
                      <h3 className={COURSE_DES}>State Board ( 2016-2017 )</h3>
                      <h4 className={COURSE_MARK}>Mark : 82.5%</h4>
                  </div>

              </div>

          </div>

          <div className={`h-[10rem]  bg-cover	`} style={{backgroundImage:`url(${Wave})`}}></div>

      </div>
  )
}

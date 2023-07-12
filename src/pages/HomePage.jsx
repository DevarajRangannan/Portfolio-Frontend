import React, {useRef } from 'react'
import MenuIcon from "../components/MenuIcon";
import Nav from "../components/Nav";
import Home from "../sections/Home"
import Skills from "../sections/Skills"
import Projects from "../sections/Projects"
import Education from "../sections/Education"
import Contact from "../sections/Contact"
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';

let height = 0 ;

export default function HomePage() {
  const HomeScollToRef = useRef()
  const SkillsScollToRef = useRef()
  const ProjectScollToRef = useRef()
  const EducationScollToRef = useRef()
  const ContactScollToRef = useRef()

  const skills_section_dynamic_height = useSelector(state => state.skills_section_dynamic_height);

  const sectionNavigator = ()=>{

    if (window.location.hash.match(/^#home$/)) {
      height = HomeScollToRef.current.offsetTop
    }
    else if (window.location.hash.match(/^#skills$/)) {
      height = SkillsScollToRef.current.offsetTop
    }
    else if(window.location.hash.match(/^#projects$/)){
      height = ProjectScollToRef.current.offsetTop
    }
    else if(window.location.hash.match(/^#education$/)){
      height = EducationScollToRef.current.offsetTop
    }
    else if(window.location.hash.match(/^#contact$/)){
      height = ContactScollToRef.current.offsetTop
    }
    
    if(window.screen.width > 768){
      height -= 64 
      console.log(height);     
    }

    window.scrollTo(0, height)
  }

  if(skills_section_dynamic_height > 0)
    sectionNavigator()

  return (
    <>
        <MenuIcon/>
        <Nav/>
        <div ref={HomeScollToRef}><Home/></div>
        <div ref={SkillsScollToRef}><Skills/></div>
        <div ref={ProjectScollToRef}><Projects/></div>
        <div ref={EducationScollToRef}><Education/></div>
        <div ref={ContactScollToRef}><Contact/></div>
        <Footer/>
    </>
  )
}

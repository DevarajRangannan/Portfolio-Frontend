import React from 'react';
import MenuIcon from "./components/MenuIcon";
import Nav from "./components/Nav";
import Home from "./sections/Home"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Education from "./sections/Education"
import Contact from "./sections/Contact"
import { useDispatch } from 'react-redux';
import { Act_Current_Section } from './redux/actions/current_section';


const idMap = new Map(
  [
    ["home", 0],
    ["skills", 1],
    ["projects", 2],
    ["education", 3],
    ["contact", 4]
  ]
)
let dispatch;

const x = ()=>{
  let sections = document.getElementsByClassName("SECTIONS")
  let sec ;
  let current_section;
  let size = sections.length
  let top = window.scrollY + 150
  let offset = 0
  let height = 0


  for( let i=0; i<size; i++){
    sec = sections[i]
    offset = sec.offsetTop
    height = sec.offsetHeight
    
    if((top >= offset) && top < offset+height){
      current_section = idMap.get(sec.getAttribute("id"))
      Act_Current_Section.data = current_section
      dispatch(Act_Current_Section);
    }
  }

}

window.addEventListener('scroll', x);


function App() {
  
dispatch = useDispatch();


  return (
    <>

    <div className={`relative	w-full h-screena min-w-[20em]  md:max-w-screen-2xl md:m-auto `}>
      <MenuIcon />
      <Nav />
      <Home/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>

      
    </div>
    </>
  );
}

export default App;

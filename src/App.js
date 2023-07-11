import React from 'react';
import { useDispatch } from 'react-redux';
import { Act_Current_Section } from './redux/actions/current_section';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllProjectsPage from './pages/AllProjectsPage';


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

const monitorCurrentSection = ()=>{
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

window.addEventListener('scroll', monitorCurrentSection);


function App() {
  
dispatch = useDispatch();


  return (
    <>

    <div className={`relative	w-full h-screena min-w-[20em]  md:max-w-screen-2xl md:m-auto `}>
      
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/all-projects' element={<AllProjectsPage/>}/>
        <Route path='*' element={<HomePage/>}/>
      </Routes>

      
    </div>
    </>
  );
}

export default App;

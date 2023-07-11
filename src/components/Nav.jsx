import React from 'react';
import {useEffect} from 'react';
import { container, md_container, body, nav, md_nav, logo, md_logo, close, anchorContainerStyle, md_anchorContainerStyle } from "./styles/Nav";
import { useSelector, useDispatch } from 'react-redux';
import { Act_sideNavBar } from '../redux/actions/side_nav';
import { ReactComponent as CloseIcon } from '../asserts/close.svg';
import {ReactComponent as Logo} from "../asserts/d-logo-blue.svg"
import { Link } from 'react-router-dom';

const colorWhite = "fill-white	border-white"
const colorBlack = "fill-black	border-black"

let sideNavBar;
let dispatch;

export default function Nav() {
  sideNavBar = useSelector(state => state.sideNavBar);
  const currentSection = useSelector(states => states.section)

   dispatch = useDispatch();

  useEffect(() => {

    const scrollableDiv = document.getElementById('scrollableDiv');

    const handleScroll = (event) => {
      event.preventDefault();  
    };

    
    scrollableDiv.addEventListener('wheel', handleScroll, { passive: false });
    scrollableDiv.addEventListener('touchmove', handleScroll, { passive: false });

    return () => {
      scrollableDiv.removeEventListener('wheel', handleScroll);
      scrollableDiv.addEventListener('touchmove', handleScroll);
    };
  }, []);

  const closeNav = () => {
    dispatch(Act_sideNavBar);
  };

  return (
    <div className={`${sideNavBar ? '-translate-x-0' : '-translate-x-full md:-translate-x-0'} ${container} ${md_container}`}>
      <div id='scrollableDiv' className={`${body}`}>
        <div className={`${nav}  ${md_nav}`}>
          <Link to="/" className={`${logo} ${md_logo}`} onClick={() => closeNav()}>
            <div className='flex items-end'>
              <div className='w-10 h-10 mr-1'><Logo/></div>
              <div>Portfolio</div>
            </div>
          </Link>
          
          
          <div className='md:flex '> 
            <div className={`${anchorContainerStyle} ${md_anchorContainerStyle}`} onClick={()=>closeNav()} >
              <a href="#home" className=' p-3 md:p-0 block'>Home</a></div>
            <div className={`${anchorContainerStyle} ${md_anchorContainerStyle}`} onClick={()=>closeNav()}>
              <a href="#skills" className=' p-3 md:p-0 block'>Skills</a>
            </div>
            <div className={`${anchorContainerStyle} ${md_anchorContainerStyle}`} onClick={()=>closeNav()}>
              <a href="#projects" className=' p-3 md:p-0 block'>Projects</a>
            </div>
            <div className={`${anchorContainerStyle} ${md_anchorContainerStyle}`} onClick={()=>closeNav()}>
              <a href="#education" className=' p-3 md:p-0 block'>Education</a>
            </div>
            <div className={`${anchorContainerStyle} ${md_anchorContainerStyle}`} onClick={()=>closeNav()}>
              <a href="#contact" className=' p-3 md:p-0 block' >Contact</a>
            </div>
          </div>
          

        </div>
        
        <div className={` w-[20%] relative md:hidden`} onClick={() => closeNav()}>
          <div className={`${close} ${currentSection%2 === 0 ? colorWhite: colorBlack} `}><CloseIcon /></div>
        </div>
      </div>
    </div>

  );
}
  
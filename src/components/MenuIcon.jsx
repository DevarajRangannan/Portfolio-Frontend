import React from 'react'
import {menu} from "./styles/MenuIcon"
import {useSelector, useDispatch} from 'react-redux'
import {Act_sideNavBar} from "../redux/actions/side_nav"
import {ReactComponent as MenuIcon} from "../asserts/menu.svg"



const colorWhite = "fill-white	border-white bg-[#212121]"
const colorBlack = "fill-black	border-black bg-white"

export default function Menu_Icon() {
  const dispatch = useDispatch();
  const currentSection = useSelector(states => states.section)
  return (
    <> 
      <div className={`${menu} ${currentSection%2 === 0 ? colorWhite: colorBlack}`} onClick={()=>{dispatch(Act_sideNavBar)}}>
        <MenuIcon/>
      </div>
    </>
  )
}

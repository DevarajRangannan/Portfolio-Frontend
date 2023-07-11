import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from './styles/Logo'
import {ReactComponent as LogoSVG} from "../asserts/d-logo-blue.svg"


export default function Logo() {
  return (
    <>
        <Link to="/" className={`${logo} `}>
            <div className='flex items-end'>
              <div className='w-10 h-10 mr-1'><LogoSVG/></div>
              <div>Portfolio</div>
            </div>
        </Link>
    </>
  )
}

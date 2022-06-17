import React, { useState } from 'react'
import { NavLink, Routes, Route  } from 'react-router-dom'

import { MdPlayArrow } from 'react-icons/md'

import Process from '../pages/Process'
import TPP from '../pages/TPP'
import ResumeTpp from '../pages/ResumeTpp'
import './MyNavbar.css'
import { NavbarItems, ProcessItems, TppItems } from './navbarItems'

const MyNavbar = () => {

  const [navi, setNavi] = useState('')
  
  const handleChange = (e) => {
    setNavi(e.target.parentNode.value)
  }

  
  const optionalListMenu = (navi == 3) ? TppItems : (navi == 4) ? ProcessItems : ''
 
  return (
    <>
      <div className='navbar'>
        <div className='navbarMain'>
          <div className='navItems'>
            <ul>
              { NavbarItems.map(item => 
                <li 
                  key={item.id} 
                  value={item.id}
                  onClick={handleChange}
                  >
                  <NavLink 
                    to={item.src}
                    >
                     {item.navbarName}
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className='navbarOptional'>
          <div className='navItems'>
            <ul>
              { optionalListMenu ? 
                optionalListMenu.map(item =>
                  <li>
                    <NavLink to={item.src} key={item.id}>
                      <MdPlayArrow style={{marginRight: '10px'}}/>{item.name}
                    </NavLink> 
                  </li>
              ): ""}
            </ul>           
          </div>
        </div>  
      </div>
      <Routes>
         { 
           (optionalListMenu == ProcessItems) ? 
            optionalListMenu.map(item =>
        <Route path={item.src} element={<Process processName={item.name}/>}/>
        ): 
         (optionalListMenu == TppItems) ? optionalListMenu.map(item =>
        <Route path={item.src} element={<ResumeTpp prodName={item.name}/>}/>
        ):
           ""
         }
      </Routes>
     
    </>
  )
}

export default MyNavbar


import { nav } from 'framer-motion/client'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { X, Menu } from 'lucide-react'
import { useState } from 'react'
const NavLinks = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/education">Education</NavLink>
      <NavLink to="/achievements">Achievements</NavLink>
      <NavLink to="/profiles">Profiles</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      
      
    </>
  )
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState('false');
  function toggleNav() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <nav className='flex w-1/3 justify-end '>
        <div className='w-full hidden md:flex justify-between'>
          <NavLinks />
        </div>
        <div className='md:hidden'>
          <button onClick={toggleNav}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className='md:hidden flex basis-full flex-col items-center'>
          <NavLinks />
        </div>)}
    </>
  )
}

export default Nav

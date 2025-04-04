import React from 'react'
import Name from './Name'
import Nav from './Nav'
const Header = () => {
  return (
    <div className=' bg-[#172554] text-white sticky top-0 z-[1] mx-auto flex flex-wrap w-full items-center justify-between  p-8'>
      <Name/>
      <Nav/>
    </div>
  )
}

export default Header

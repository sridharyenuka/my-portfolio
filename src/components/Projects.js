import React from 'react'
import amazon from './images/amazon.jpg'
import inotebook from './images/inotebook.jpg'
const Projects = () => {
  return (
    <div>
      <div className='flex justify-center'>
      <h5 className='my-4 text-lg font-semibold '>Projects</h5>
      </div>
      <div className='flex flex-row items-center justify-center gap-5 mt-3'>
        <div className=' flex flex-col items-center justify-center rounded-2xl bg-[#171717] h-70 w-64 '>
          
          <div className='flex items-center justify-center h-51 w-72 mt-1'>
          <img className="border-3 border-white-600 rounded h-full w-3/4 my-3 " src={inotebook} alt="inotebook" />
          </div>
          <h2 className='text-white'>iNotebook</h2>
          <button className='bg-blue-500 text-white p-1 rounded my-3' to="/about">iNotebook</button>
          
        </div>
        
        <div className=' flex flex-col items-center justify-center rounded-2xl bg-[#171717] h-70 w-64 '>

          <div className='flex items-center justify-center h-51 w-72 mt-1'>
          <img className="border-3 border-white-600 rounded h-full w-3/4 my-3 " src={amazon} alt="amazon" />
          </div>
          <h2 className='text-white'>Amazon Clone</h2>
          <button className='bg-blue-500 text-white p-1 rounded my-3' to="/about">Amazon</button>
          
        </div>

      </div>
    </div>
  )
}

export default Projects

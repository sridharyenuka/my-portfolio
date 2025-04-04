import React from 'react'
import amazon from './images/amazon.jpg'
import inotebook from './images/inotebook.jpg'
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <div className='hidden md:block'>
        <div className='flex justify-center'>
          <h5 className='my-4 text-lg font-semibold '>Projects</h5>
        </div>
        <div className='flex flex-row items-center justify-center gap-5 mt-3'>
          <div className=' flex flex-col items-center justify-center rounded-2xl bg-[#171717] h-70 w-64 '>

            <div className='flex items-center justify-center h-51 w-72 mt-1'>
              <img className="border-3 border-white-600 rounded h-full w-3/4 my-3 " src={inotebook} alt="inotebook" />
            </div>
            <h2 className='text-white'>iNotebook</h2>
            <div className="flex items-center justify-center my-2 bg-white rounded-full h-10 w-10">
              <a href="https://github.com/sridharyenuka/i_notebook" target="_blank" rel="noopener noreferrer" className="text-2xl text-black hover:text-gray-700">
                <FaGithub className=''/>
              </a>
            </div>

          </div>

          <div className=' flex flex-col items-center justify-center rounded-2xl bg-[#171717] h-70 w-64 '>

            <div className='flex items-center justify-center h-51 w-72 mt-1'>
              <img className="border-3 border-white-600 rounded h-full w-3/4 my-3 " src={amazon} alt="amazon" />
            </div>
            <h2 className='text-white'>Amazon Clone</h2>
            <div className="flex items-center justify-center my-2 bg-white rounded-full h-10 w-10">
              <a href="https://github.com/sridharyenuka/amazon_clone" target="_blank" rel="noopener noreferrer" className="text-2xl text-black hover:text-gray-700">
                <FaGithub className=''/>
              </a>
            </div>

          </div>

        </div>
      </div>
      <div className='md:hidden'>
        <div className='flex justify-center'>
          <h5 className='my-4 text-lg font-semibold '>Projects</h5>
        </div>
        <div className='flex flex-col items-center justify-center gap-5 mt-3 pb-4'>
          <div className=' flex flex-col items-center justify-center rounded-2xl bg-[#171717] h-70 w-64 '>

            <div className='flex items-center justify-center h-51 w-72 mt-1'>
              <img className="border-3 border-white-600 rounded h-full w-3/4 my-3 " src={inotebook} alt="inotebook" />
            </div>
            <h2 className='text-white'>iNotebook</h2>
            <div className="flex items-center justify-center my-2 bg-white rounded-full h-10 w-10">
              <a href="https://github.com/sridharyenuka/i_notebook" target="_blank" rel="noopener noreferrer" className="text-2xl text-black hover:text-gray-700">
                <FaGithub className=''/>
              </a>
            </div>

          </div>

          <div className=' flex flex-col items-center justify-center rounded-2xl bg-[#171717] h-70 w-64 '>

            <div className='flex items-center justify-center h-51 w-72 mt-1'>
              <img className="border-3 border-white-600 rounded h-full w-3/4 my-3 " src={amazon} alt="amazon" />
            </div>
            <h2 className='text-white'>Amazon Clone</h2>
            <div className="flex items-center justify-center my-2 bg-white rounded-full h-10 w-10">
              <a href="https://github.com/sridharyenuka/amazon_clone" target="_blank" rel="noopener noreferrer" className="text-2xl text-black hover:text-gray-700">
                <FaGithub className=''/>
              </a>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Projects

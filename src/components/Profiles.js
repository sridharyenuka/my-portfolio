import React from 'react'
import '../index.css'
import leetcodeImg from './images/icons8-leetcode-500.png'
import codechefImg from './images/icons8-codechef-500.png'
const Profiles = () => {
  return (
    <>
      <div className='hidden md:block'>
        <div className=' flex  flex-col items-center justify-center'>
          <h5 className='my-4 text-lg font-semibold'>Profiles</h5>
        </div>

        <div className='rounded-2xl profiles-cont'>
          <div className="flex items-center justify-center mt-5 gap-5">
            <div className=" codechef">
              <a href="https://leetcode.com/u/sridharyenuka7/" target='_blank' rel="noopener noreferrer">
                <img src={leetcodeImg} alt="" className='rounded-md' />
              </a>

            </div>
            <div className='leetcode'>
              <a href="https://www.codechef.com/users/sridharyenuka7" target='_blank' rel="noopener noreferrer">
                <img src={codechefImg} alt="" className='rounded-md' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='md:hidden'>
        <div className=' flex  flex-col items-center justify-center'>
          <h5 className='my-4 text-lg font-semibold'>Profiles</h5>
        </div>

        <div className='rounded-2xl profiles-cont'>
          <div className=" flex flex-col items-center justify-center gap-5">

            <div className=" codechef">
              <img src={leetcodeImg} alt="" className='rounded-md' onClick={() => { }} />
            </div>
            <div className='leetcode'>
              <img src={codechefImg} alt="" className='rounded-md' />

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profiles

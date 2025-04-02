import React from 'react'
import '../index.css'
import leetcodeImg from './images/leetcodeimg.jpg'
import codechefImg from './images/codechefimg.jpg'
const Profiles = () => {
  return (
    <>
   <div className=' flex  flex-col items-center justify-center'>
      <h5 className='my-4 text-lg font-semibold'>Profiles</h5>
     </div>

    <div className='rounded-2xl profiles-cont'>
      <div className=" profiles">
        
        <div className=" codechef">
          <img src={leetcodeImg} alt="" className='rounded-md' onClick={()=>{}}/>
        </div>
        <div className='leetcode'>
        <img src={codechefImg} alt="" className='rounded-md'/>

        </div>
      </div>
    </div>
    </>
  )
}

export default Profiles

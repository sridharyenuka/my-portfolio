import React from 'react'
import '../index.css'
const Achievements = () => {
  return (
    <>
      <div className='hidden md:block'>
        <div className=' flex flex-col items-center justify-center'>
          <h5 className='my-4 text-lg font-semibold'>Achievements</h5>
        </div>
        <div className='flex flex-col items-center justify-center  '>

          <ul className="achievements">

            <li>Certified at Programming Foundations: Beyond the Fundamentals</li>
            <li>Obtained rank 1068 out of 24724 participants at codechef STARTERS 150</li>
            <li>Achieved level-6(specialist) in Coding Ninjas</li>
            <li>Highest rating of 1440 at LeetCode</li>
            <li>Solved 1000+ problems across various platforms</li>
          </ul>
        </div>
      </div>
      <div className=' md:hidden flex flex-col items-center justify-center'>
        <div className=' flex items-center justify-center'>
          <h5 className='my-4 text-lg font-semibold'>Achievements</h5>
        </div>
        <div className='flex justify-center items-center w-4/5 h-4/5'>

          <ul className="bg-[#186e6e] text-white rounded p-2 flex flex-col justify-center items-center list-disc list-inside break-words whitespace-normal">

            <li>Certified at Programming Foundations: Beyond the Fundamentals</li>
            <li>Obtained rank 1068 out of 24724 participants at codechef STARTERS 150</li>
            <li>Achieved level-6(specialist) in Coding Ninjas</li>
            <li>Highest rating of 1440 at LeetCode</li>
            <li>Solved 1000+ problems across various platforms</li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default Achievements

import React from 'react'

const Education = () => {
  return (
    <div className=' flex  flex-col items-center justify-center'>
      <div>
      <h5 className='my-4 text-lg font-semibold'>Education</h5>
      </div>
     <div className='rounded-2xl flex  flex-col items-center justify-center gap-y-3  text-white mt-0 w-90 h-100 p-5 px-5 bg-[#334155] '>
      <div  className='flex  flex-col items-center justify-center '>
        <h2>University College of Engineering, Osmania University(2020-2024)</h2>
        <p>Electrical & Electronics Engineering(EEE)</p>
      </div>
      <div  className='flex  flex-col items-center justify-center'>
        <h2>TSWRJC Boys(2018-2020)</h2>
        <p>Maths, Physics, Chemistry(MPC)</p>
      </div>
      <div  className='flex  flex-col items-center justify-center'>
        <h2>Jan Peter Memorial School(2018)</h2>
        <p>High School(SSC)</p>
      </div>
     </div>
    </div>
  )
}

export default Education

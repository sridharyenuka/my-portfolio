import React from 'react'
import sridharImg from './images/sridhar.jpeg'
import { Linkedin } from 'lucide-react';
import { Github } from "lucide-react";
// import pdf from '/public/assets/resumeM3.pdf'
const Photo = () => {
    
    const handleDownload = () => {
        const pdfUrl = '/assets/resumeM3.pdf'; // Replace with the actual path of your PDF
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "/assets/resumeM3.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    // C:\Users\sridh\Desktop\dev\my-portfolio\public\assets\resumeM3.pdf
    
    return (
        <>
            <section className="md:hidden flex justify-center items-center  gap-5 mt-0" id="profile ">
                <div className=' flex flex-col items-center justify-center'>
                    <img src={sridharImg} alt="" className="border-2 border-black w-64 h-64 rounded-full mt-14" />
                    <div className='flex flex-col justify-center items-center'>
                    <p>Hello, I'm</p>
                    <h1 className='font-bold text-2xl'>Yenuka Sridhar</h1>
                    <p>Software Developer</p>
                    <div className="btn-container flex flex-row justify-between gap-3">
                        <button className='bg-[#334155] text-white p-2 rounded my-2' onClick={handleDownload}>Download CV</button>
                        {/* <button className='bg-blue-500 text-white p-2 rounded my-2' to="/about">Contact</button> */}
                    </div>
                    <div className="socials flex items-center justify-center gap-4">

                        <a href="https://www.linkedin.com/in/sridhar-yenuka-70271123b/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-8 h-8 text-black-600 hover:text-black-800 transition" />
                        </a>
                        <a href="https://github.com/sridharyenuka" target="_blank" rel="noopener noreferrer">
                            <Github className="w-8 h-8 text-black hover:text-gray-600 transition" />
                        </a>
                    </div>
                </div>
                </div>
                
            </section>
            <section className="hidden md:block flex-row justify-center items-center  gap-10 mt-0" id="profile ">
                <div className='flex items-center justify-center gap-4'>
                    <img src={sridharImg} alt="" className="border-2 border-black w-64 h-64 rounded-full mt-14" />
                    <div className='flex flex-col justify-center items-center'>
                    <p>Hello, I'm</p>
                    <h1 className='font-bold text-2xl'>Yenuka Sridhar</h1>
                    <p>Software Developer</p>
                    <div className="btn-container flex flex-row justify-between gap-3">
                        <button className='bg-[#334155] text-white p-2 rounded my-2 ' onClick={handleDownload}>Download CV</button>
                        {/* <button className='bg-blue-500 text-white p-2 rounded my-2' to="/about">Contact</button> */}
                    </div>
                    <div className="socials flex items-center justify-center gap-4">

                        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-8 h-8 text-black-600 hover:text-black-800 transition" />
                        </a>
                        <a href="https://github.com/sridharyenuka" target="_blank" rel="noopener noreferrer">
                            <Github className="w-8 h-8 text-black hover:text-gray-600 transition" />
                        </a>
                    </div>
                </div>
                </div>
                
            </section>

        </>
    )
}

export default Photo;

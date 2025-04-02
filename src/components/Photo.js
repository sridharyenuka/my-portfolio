import React from 'react'
import sridharImg from './images/sridhar.jpeg'
import { Linkedin } from 'lucide-react';
import { Github } from "lucide-react";
const Photo = () => {
    return (
        <>
            <section className="flex justify-center items-center  gap-5 mt-0" id="profile ">
                <div >
                    <img src={sridharImg} alt="" className="border-2 border-black w-64 h-64 rounded-full mt-14" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p>Hello, I'm</p>
                    <h1 className='font-bold text-2xl'>Yenuka Sridhar</h1>
                    <p>Software Developer</p>
                    <div className="btn-container flex flex-row justify-between gap-3">
                        <button className='bg-blue-500 text-white p-2 rounded my-2' onClick={() => window.open('resume/resumeM3.pdf')}>Download CV</button>
                        <button className='bg-blue-500 text-white p-2 rounded my-2' to="/about">Contact</button>
                    </div>
                    <div className="socials flex items-center justify-center gap-4">

                        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-8 h-8 text-black-600 hover:text-black-800 transition" />
                        </a>
                        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                            <Github className="w-8 h-8 text-black hover:text-gray-600 transition" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Photo

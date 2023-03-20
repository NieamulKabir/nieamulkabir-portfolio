import React from 'react';
import Lottie from 'lottie-react'
import programmers from '../../assests/programmers.json'
import { Typewriter } from 'react-simple-typewriter'
import Animation from '../Animation/Animation'
import Bounce from 'react-reveal/Bounce';

const Banner = () => {
    return (
        <div id="home" className="bg-gray-600 font-serif">
            <div className='position-relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2'>
                <Animation></Animation>

                <div className='flex flex-col items-center justify-between lg:flex-row '>
                    <div className="">
                        <div className="flex flex-row  md:flex-col justify-center items-center">
                            <a
                                href="https://www.linkedin.com/in/md-nieamul-kabir-101b491b2/"
                                className="text-decoration-none text-white"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i class="fa-brands fa-linkedin-in text-2xl"></i>

                            </a>
                            <a
                                href="https://github.com/NieamulKabir"
                                className="text-decoration-none text-white m-2"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-github text-2xl"></i>

                            </a>
                            <a
                                href="https://www.facebook.com/nieamul.kabir.3"
                                className="text-decoration-none text-white "
                                target="_blank"
                                rel="noreferrer"
                            >
                                {' '}
                                <i className="fa-brands fa-facebook text-2xl"></i>

                            </a>
                        </div>
                    </div>
                    <div className='mb-10 lg:max-w-lg  lg:ml-0 lg:mb-0'>
                        <div className='max-w-xl mb-6 lg:mt-2'>
                            <Bounce top>
                                <h1 className="text-xl lg:text-3xl pb-5 font-thin text-left text-white">HELLO</h1>
                                <h1 className="text-2xl lg:text-4xl font-bold text-left text-white">I'm <span className="text-green-300">Md.Nieamul Kabir</span> </h1>
                            </Bounce>
                            <h2 className="text-xl  lg:text-3xl font-bold pt-5 mb-16 text-left text-white"><span>
                                <Typewriter
                                    loop
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed="90"
                                    deleteSpeed="50"
                                    delaySpeed="1000"
                                    words={['React Developer', 'Web Designer', 'Web Developer', 'MERN Stack Developer']}
                                />
                            </span>
                            </h2>
                            <h1 className='text-left'>
                                <a href="https://drive.google.com/file/d/1TyrRwdSaOekuWoqxXI4crAs2bkZPUpIF/view?usp=share_link" target="_blank" rel="noreferrer" className="hover:bg-zinc-800 hover:text-white shadow-emerald-400/30 shadow-lg transition duration-500 mx-auto px-8 py-4  lg:px-8 lg:py-4  bg-emerald-400 rounded-full text-zinc-800 font-semibold text-left">Download Resume</a>
                            </h1>
                        </div>
                    </div>

                    <div className='relative lg:w-1/2 '>
                        <div className='w-full lg:w-4/5 lg:ml-auto h-64 sm:h-96 mb-36 mt-10'>
                            <Lottie animationData={programmers} loop={true} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
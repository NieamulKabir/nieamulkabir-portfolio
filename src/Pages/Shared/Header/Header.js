import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {
    return (

        <nav className="sticky top-0 w-full z-50 text-gray-800 font-serif">

            <div className="navbar bg-[#a2f3c0]">
                <div className="flex-1 md:pl-5 mx-2">
                    <AnchorLink href="/">
                        <div className="ml-10">
                            <p className='font-extrabold italic text-base text-violet-600  md:text-2xl'>Nieamul' Portfolio</p>
                        </div>
                    </AnchorLink>
                </div>

                <div className="hidden mx-2 mr-16 lg:flex">
                    <div className="flex items-center">

                        <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn mr-2">
                            <AnchorLink href='#home'>
                                HOME
                            </AnchorLink>
                        </h1>
                        <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn mr-2">
                            <AnchorLink href='#about'>
                                About
                            </AnchorLink>
                        </h1>


                        <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn mr-2">
                            <AnchorLink href='#projects'>
                                Projects
                            </AnchorLink>
                        </h1>

                        <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn">
                            <AnchorLink href='#contact'>
                                Contact
                            </AnchorLink>
                        </h1>

                    </div>
                </div>


                {/* tablate ans phone  */}
                <div className="flex-none lg:hidden dropdown dropdown-left">
                    <button tabIndex="0" className="m-1 btn hover:bg-gray-800 btn-square hover:text-white btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <ul tabIndex="0" className="p-2 relative top-10 shadow menu dropdown-content bg-slate-100 dark:bg-slate-600 rounded-box w-52 mt-2">
                        <li>
                            <AnchorLink className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-2" href='#home'>
                                HOME
                            </AnchorLink>
                        </li>
                        <li className="">
                            <AnchorLink className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3" href='#about'>
                                ABOUT
                            </AnchorLink>
                        </li>
                        <li className="">
                            <AnchorLink className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3" href='#projects'>
                                PROJECTS
                            </AnchorLink>
                        </li>

                        <li>
                            <AnchorLink className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3" href="#contact">
                                CONTACT
                            </AnchorLink>
                        </li>






                    </ul>
                </div>
            </div>
        </nav>


    );
};

export default Header;
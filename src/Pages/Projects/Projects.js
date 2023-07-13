import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { NavLink } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`https://nieamulkabir.github.io/pro-data/projects.json`)
            .then(res => res.json())
            .then(data => setProjects(data))

    }, [])
    return (
        <div className="font-serif bg-gray-500">
            <div id="projects" className="text-slate-700  pb-20 ">
                <div className="container mx-auto  bg-gray-500 pb-20">
                    <h1 className=" pt-16 text-4xl font-bold text-white">My Projects</h1>
                    <hr className="py-1 bg-emerald-400 w-[155px] border-none rounded mb-10 mx-auto" />
                    <Tabs>
                        <TabList className="w-11/12 lg:w-full mx-auto text-white">
                            <Tab>React</Tab>
                            <Tab>Fullstack</Tab>
                            <Tab>Javascript</Tab>
                            <Tab>html</Tab>
                            <Tab>All Projects</Tab>
                        </TabList>

                        <TabPanel id="React" className=''>
                            <h2 className="mt-10 mb-10 text-white text-2xl font-semibold">Projects using React</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2 ">

                                {
                                    projects.filter(reactProjects => reactProjects.projectCategory === "React" || reactProjects.projectCategory === "Fullstack").map(myReactProjects =>

                                        <div data-aos="flip-left"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="2000" key={myReactProjects.projectId} className=''>

                                            <div className="card bg-base-100 md:h-[650px] shadow-xl">
                                                <figure><img className='w-full h-[310px] m-2  rounded-2xl' src={myReactProjects.projectIMG} alt="" /></figure>
                                                <div className="card-body">
                                                    <div>
                                                        <h2 className="text-xl font-semibold">
                                                            Project: <span className="text-emerald-500"> {myReactProjects.projectName} </span>
                                                        </h2>
                                                        <p className="text-sm mb-2 text-slate-800 font-light">{myReactProjects.projectType}</p>
                                                        <h2>
                                                            Technology Used:
                                                        </h2>
                                                        <div className="mt-2">
                                                            <button className=" transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm  bg-gray-700 text-white rounded-full m-1">JSX</button>
                                                            <button className="transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm  bg-gray-700 text-white rounded-full m-1">JavaScript</button>
                                                            <button className="transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm  bg-gray-700 text-white rounded-full m-1">React</button>
                                                        </div>
                                                        <h3 className="text-slate-700  mx-auto mt-6">
                                                            {myReactProjects.projectDescription}
                                                        </h3>
                                                        <div className=" mt-4">
                                                            <NavLink to={`/projects/${myReactProjects.projectId}`} className="px-5 mx-2 bg-gray-700 text-white py-2 rounded hover:bg-slate-300 hover:text-slate-700 transition duration-300 animate-infinite " >View Details</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                }
                            </div>

                        </TabPanel>

                        <TabPanel id="html" className=''>
                            <h2 className="mt-10 mb-10 text-white text-2xl font-semibold">Projects using html,css only & bootstrap</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2 ">

                                {
                                    projects.filter(htmlProjects => htmlProjects.projectCategory === "html").map(myHtmlProjects =>

                                        <div data-aos="flip-left"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="2000" key={myHtmlProjects.projectId} className=''>

                                            <div className="card bg-base-100 shadow-xl">
                                                <figure><img className='w-full h-[310px] m-2 rounded-2xl' src={myHtmlProjects.projectIMG} alt="" /></figure>
                                                <div className="card-body">
                                                    <div>
                                                        <h2 className="text-xl font-semibold">
                                                            Project: <span className="text-emerald-500"> {myHtmlProjects.projectName} </span>
                                                        </h2>
                                                        <p className="text-sm mb-2 text-slate-800 font-light">{myHtmlProjects.projectType}</p>
                                                        <h2>
                                                            Technology Used:
                                                        </h2>
                                                        <div className="mt-2">
                                                            <button className=" transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm  bg-gray-700 text-white rounded-full m-1">html</button>
                                                            <button className="transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm  bg-gray-700 text-white rounded-full m-1">css</button>
                                                            <button className="transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm  bg-gray-700 text-white rounded-full m-1">Bootstrap</button>
                                                        </div>
                                                        <h3 className="text-slate-700  mx-auto mt-6">
                                                            {myHtmlProjects.projectDescription}
                                                        </h3>
                                                        <div className=" mt-4">
                                                            <NavLink to={`/projects/${myHtmlProjects.projectId}`} className="px-5 mx-2 bg-gray-700 text-white py-2 rounded hover:bg-slate-300 hover:text-slate-700 transition duration-300 animate-infinite " >View Details</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            {/* <div>
                                                <img className=" transform transition duration-300 mx-auto w-11/12 lg:w-full rounded-lg border-8 mb-5 lg:mb-0 dark:border-gray-400 border-slate-300 h-96" src={myHtmlProjects.projectIMG} alt="" />
                                            </div> */}
                                            {/* <div>
                                                <h2 className=" text-xl mb-2 font-semibold">
                                                    Project: <span className="dark:text-emerald-400 text-emerald-500"> {myHtmlProjects.projectName} </span>
                                                </h2>
                                                <p className="text-sm mb-4 dark:text-emerald-400 text-slate-800 font-light">{myHtmlProjects.projectType}</p>
                                                <h2>
                                                    Technology Used:
                                                </h2>
                                                <div className="mt-5">
                                                    <button className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm dark:bg-zinc-700 dark:text-emerald-400 bg-emerald-500 text-white rounded-full m-1">html</button>
                                                    <button className="transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm dark:bg-zinc-700 dark:text-emerald-400 bg-emerald-500 text-white rounded-full m-1">css</button>
                                                    <button className="transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm dark:bg-zinc-700 dark:text-emerald-400 bg-emerald-500 text-white rounded-full m-1">Bootstrap</button>
                                                </div>
                                                <h3 className="dark:text-gray-300 text-slate-700 w-5/6 mx-auto mt-10">
                                                    {myHtmlProjects.projectDescription}
                                                </h3>
                                                <div className=" mt-16">
                                                    <NavLink to={`/projects/${myHtmlProjects.projectId}`} className="px-5 mx-2 bg-emerald-500 text-white dark:text-gray-900 py-2 rounded dark:bg-emerald-400 dark:hover:bg-zinc-700 hover:bg-slate-300 dark:hover:text-white hover:text-slate-700 transition duration-300 animate-infinite " >View Details</NavLink>
                                                </div>
                                            </div> */}
                                        </div>
                                    )
                                }
                            </div>

                        </TabPanel>



                        <TabPanel id="Javascript" className=''>
                            <h2 className="mt-10 mb-10 text-white text-2xl font-semibold">Projects using using html, css & Javascript</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2 ">

                                {
                                    projects.filter(javascriptProjects => javascriptProjects.projectCategory === "Javascript").map(myJavascriptProjects =>

                                        <div data-aos="flip-left"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="2000" key={myJavascriptProjects.projectId} className=''>

                                            <div className="card bg-base-100 shadow-xl">
                                                <figure><img className='w-full h-[310px] m-2 rounded-2xl' src={myJavascriptProjects.projectIMG} alt="" /></figure>
                                                <div className="card-body">
                                                    <div>
                                                        <h2 className="text-xl font-semibold">
                                                            Project: <span className="text-emerald-500"> {myJavascriptProjects.projectName} </span>
                                                        </h2>
                                                        <p className="text-sm mb-2 text-slate-800 font-light">{myJavascriptProjects.projectType}</p>
                                                        <h2>
                                                            Technology Used:
                                                        </h2>
                                                        <div className="mt-2">
                                                            <button className=" transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm  bg-gray-700 text-white rounded-full m-1">html</button>
                                                            <button className="transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm  bg-gray-700 text-white rounded-full m-1">css</button>
                                                            <button className="transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm  bg-gray-700 text-white rounded-full m-1">Javascript</button>
                                                        </div>
                                                        <h3 className="text-slate-700  mx-auto mt-6">
                                                            {myJavascriptProjects.projectDescription}
                                                        </h3>
                                                        <div className=" mt-4">
                                                            <NavLink to={`/projects/${myJavascriptProjects.projectId}`} className="px-5 mx-2 bg-gray-700 text-white py-2 rounded hover:bg-slate-300 hover:text-slate-700 transition duration-300 animate-infinite " >View Details</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>

                        </TabPanel>





                        <TabPanel id="React" className=''>
                            <h2 className="mt-10 mb-10 text-white text-2xl font-semibold">Projects using React</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2 ">

                                {
                                    projects.filter(reactProjects => reactProjects.projectCategory === "React" || reactProjects.projectCategory === "Fullstack").map(myReactProjects =>

                                        <div data-aos="flip-left"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="2000" key={myReactProjects.projectId} className=''>

                                            <div className="card bg-base-100 md:h-[650px] shadow-xl">
                                                <figure><img className='w-full h-[310px] m-2  rounded-2xl' src={myReactProjects.projectIMG} alt="" /></figure>
                                                <div className="card-body">
                                                    <div>
                                                        <h2 className="text-xl font-semibold">
                                                            Project: <span className="text-emerald-500"> {myReactProjects.projectName} </span>
                                                        </h2>
                                                        <p className="text-sm mb-2 text-slate-800 font-light">{myReactProjects.projectType}</p>
                                                        <h2>
                                                            Technology Used:
                                                        </h2>
                                                        <div className="mt-2">
                                                            <button className=" transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm  bg-gray-700 text-white rounded-full m-1">JSX</button>
                                                            <button className="transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm  bg-gray-700 text-white rounded-full m-1">JavaScript</button>
                                                            <button className="transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm  bg-gray-700 text-white rounded-full m-1">React</button>
                                                        </div>
                                                        <h3 className="text-slate-700  mx-auto mt-6">
                                                            {myReactProjects.projectDescription}
                                                        </h3>
                                                        <div className=" mt-4">
                                                            <NavLink to={`/projects/${myReactProjects.projectId}`} className="px-5 mx-2 bg-gray-700 text-white py-2 rounded hover:bg-slate-300 hover:text-slate-700 transition duration-300 animate-infinite " >View Details</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                }
                            </div>

                        </TabPanel>



                        <TabPanel id="Fullstack" className=''>
                            <h2 className="mt-10 mb-10 text-white text-2xl font-semibold">Fullstack Projects using MERN</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2 ">

                                {
                                    projects.filter(fullstackProjects => fullstackProjects.projectCategory === "Fullstack").map(myFullstackProjects =>

                                        <div data-aos="flip-left"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="2000" key={myFullstackProjects.projectId} className=''>

                                            <div className="card bg-base-100 md:h-[650px] shadow-xl">
                                                <figure><img className='w-full h-[310px] m-2  rounded-2xl' src={myFullstackProjects.projectIMG} alt="" /></figure>
                                                <div className="card-body">
                                                    <div>
                                                        <h2 className="text-xl font-semibold">
                                                            Project: <span className="text-emerald-500"> {myFullstackProjects.projectName} </span>
                                                        </h2>
                                                        <p className="text-sm mb-2 text-slate-800 font-light">{myFullstackProjects.projectType}</p>
                                                        <h2>
                                                            Technology Used:
                                                        </h2>
                                                        <div className="mt-2">
                                                            <button className=" transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm  bg-gray-700 text-white rounded-full m-1">React</button>
                                                            <button className="transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm  bg-gray-700 text-white rounded-full m-1">Node.js</button>
                                                            <button className="transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm  bg-gray-700 text-white rounded-full m-1">Express</button>
                                                            <button className="transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm  bg-gray-700 text-white rounded-full m-1">Mongodb</button>
                                                        </div>
                                                        <h3 className="text-slate-700  mx-auto mt-6">
                                                            {myFullstackProjects.projectDescription}
                                                        </h3>
                                                        <div className=" mt-4">
                                                            <NavLink to={`/projects/${myFullstackProjects.projectId}`} className="px-5 mx-2 bg-gray-700 text-white py-2 rounded hover:bg-slate-300 hover:text-slate-700 transition duration-300 animate-infinite " >View Details</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                }
                            </div>

                        </TabPanel>





                        <TabPanel id="All Projects">
                            <h2 className="mt-10 mb-10 text-white text-2xl font-semibold">All  projects</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2 ">

                                {
                                    projects.map(myAllProjects =>
                                        <div data-aos="flip-left"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="2000" key={myAllProjects.projectId} >


                                            <div className="card bg-base-100 md:h-[650px] shadow-xl">
                                                <figure><img className='w-full h-[310px] m-2  rounded-2xl' src={myAllProjects.projectIMG} alt="" /></figure>
                                                <div className="card-body">
                                                    <div>
                                                        <h2 className="text-xl font-semibold">
                                                            Project: <span className="text-emerald-500"> {myAllProjects.projectName} </span>
                                                        </h2>
                                                        <p className="text-sm mb-2 text-slate-800 font-light">{myAllProjects.projectType}</p>
                                                        <h2>
                                                            Technology Used:
                                                        </h2>
                                                        <div className="mt-2">
                                                            <button className=" transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm  bg-gray-700 text-white rounded-full m-1">html</button>
                                                            <button className=" transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm  bg-gray-700 text-white rounded-full m-1">css</button>
                                                            <button className=" transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm  bg-gray-700 text-white rounded-full m-1">Javascript</button>
                                                            <button className=" transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm  bg-gray-700 text-white rounded-full m-1">React</button>
                                                            <button className="transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm  bg-gray-700 text-white rounded-full m-1">Node.js</button>
                                                            <button className="transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm  bg-gray-700 text-white rounded-full m-1">Express</button>
                                                            <button className="transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm  bg-gray-700 text-white rounded-full m-1">Mongodb</button>
                                                        </div>
                                                        <h3 className="text-slate-700  mx-auto mt-6">
                                                            {myAllProjects.projectDescription}
                                                        </h3>
                                                        <div className=" mt-4">
                                                            <NavLink to={`/projects/${myAllProjects.projectId}`} className="px-5 mx-2 bg-gray-700 text-white py-2 rounded hover:bg-slate-300 hover:text-slate-700 transition duration-300 animate-infinite " >View Details</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }

                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Projects;
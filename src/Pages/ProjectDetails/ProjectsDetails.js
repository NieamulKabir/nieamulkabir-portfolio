import React, { useEffect, useState } from 'react';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const ProjectsDetails = () => {
    let { projectId } = useParams();

    const [projects, setProjects] = useState([]);
    const [singleProject, setSingleProject] = useState({});


    useEffect(() => {
        fetch(`https://nieamulkabir.github.io/pro-data/projects.json`)
            .then(res => res.json())
            .then(data => setProjects(data))

    }, [])


    // FINDING MATCHING DATA
    useEffect(() => {
        const foundProject = projects.find(projects => projects.projectId === projectId);
        setSingleProject(foundProject);
    }, [projectId, projects]);



    return (
        <div className="bg-green-100 font-serif">
            <div className="py-20 w-11/12 lg:w-4/6 mx-auto text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-600 w-11/12 lg:w-full mx-auto rounded-box pt-5 pb-10 lg:py-10 lg:pl-10">
                    <div>
                        <img className=" mx-auto w-11/12 lg:w-full rounded-lg border-8 mb-5 lg:mb-0 border-gray-400 " src={singleProject?.projectIMG} alt="" />
                        <div className="pt-10 pb-24 lg:pb-0 flex flex-col lg:flex-row justify-center items-center">
                            <a target="_blank" rel="noreferrer" href={singleProject?.projectLiveSite} className="px-3 mx-2 my-3 text-gray-900 py-2 rounded-full bg-emerald-400 hover:bg-gray-700 hover:text-white transition duration-300">Live Site</a>
                            <a target="_blank" rel="noreferrer" href={singleProject?.projectClientCode} className="px-3 mx-2 my-3 text-gray-900 py-2 rounded-full bg-emerald-400 hover:bg-gray-700 hover:text-white transition duration-300">Client side code</a>
                            {
                                singleProject?.projectServerCode && <a target="_blank" rel="noreferrer" href={singleProject?.projectServerCode} className="px-3 mx-2 my-3 text-gray-900 py-2 rounded-full bg-emerald-400 hover:bg-gray-700 hover:text-white transition duration-300">Server side code</a>
                            }
                        </div>
                    </div>
                    <div>
                        <h2 className=" text-xl mb-2 font-semibold text-white">
                            Project: <span className="text-emerald-400"> {singleProject?.projectName} </span>
                        </h2>
                        <p className="text-sm mb-4 text-emerald-400 font-light">{singleProject?.projectType}</p>
                        <h2>
                            Technology Used:
                        </h2>
                        {
                            singleProject?.projectCategory === "html" &&
                            <div className="mt-5">
                                <button className=" transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm bg-gray-700 text-emerald-400 rounded-full m-1">html</button>
                                <button className="transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm bg-gray-700 text-emerald-400 rounded-full m-1">css</button>
                                <button className=" transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm bg-gray-700 text-emerald-400 rounded-full m-1">bootstrap</button>
                            </div>
                        }
                        {
                            singleProject?.projectCategory === "Javascript" &&
                            <div className="mt-5">
                                <button className=" transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm bg-gray-700 text-emerald-400 rounded-full m-1">html</button>
                                <button className=" transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm bg-gray-700 text-emerald-400 rounded-full m-1">css</button>

                                <button className=" transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm bg-gray-700 text-emerald-400 rounded-full m-1">Javascript</button>
                            </div>
                        }
                        {
                            singleProject?.projectCategory === "React" &&
                            <div className="mt-5">
                                <button className=" transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm bg-gray-700 text-emerald-400 rounded-full m-1">JSX</button>
                                <button className=" transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm bg-gray-700 text-emerald-400 rounded-full m-1">Javascript</button>
                                <button className=" transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm bg-gray-700 text-emerald-400 rounded-full m-1">React</button>
                            </div>
                        }
                        {
                            singleProject?.projectCategory === "Fullstack" &&
                            <div className="mt-5">
                                <button className=" transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm bg-gray-700 text-emerald-400 rounded-full m-1">React</button>
                                <button className=" transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm bg-gray-700 text-emerald-400 rounded-full m-1">Node.js</button>
                                <button className=" transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm bg-gray-700 text-emerald-400 rounded-full m-1">Express</button>
                                <button className=" transform transition cursor-default duration-300 hover:scale-110 px-3 font-light py-1 text-sm bg-gray-700 text-emerald-400 rounded-full m-1">Mongodb</button>
                            </div>
                        }
                        <h3 className="text-gray-300 w-5/6 mx-auto mt-10">
                            {singleProject?.projectDescription}
                        </h3>


                    </div>
                </div>
                <button className='mt-16'>

                    <NavLink to="/" className="px-5 py-3 bg-emerald-400 rounded">Back to Home</NavLink>
                </button>
            </div>

        </div>
    );
};

export default ProjectsDetails;
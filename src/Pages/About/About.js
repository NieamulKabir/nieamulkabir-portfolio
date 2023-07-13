import React, { useEffect } from "react";
import my_photo from "../../assests/image/formalPC.jpg";
import Wobble from "react-reveal/Wobble";
import Bounce from "react-reveal/Bounce";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="about" className="bg-slate-100  text-zinc-800 font-serif pb-16">
      <div className="container mx-auto ">
        <h1 className=" pt-20 pb-5 text-4xl font-bold ">About Me</h1>
        <hr className="py-1 bg-emerald-300 w-36 border-none rounded mb-20 mx-auto" />

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className=" flex items-center flex-col lg:flex-row w-11/12 mx-auto bg-green-100  py-5 px-3 lg:p-16 rounded-box lg:border-l-8 border-green-300"
        >
          <div className="lg:w-1/3">
            <Bounce bottom>
              <img
                className="transform transition duration-300 hover:scale-110 h-60 mb-10 mx-auto lg:h-80  rounded-3xl"
                src={my_photo}
                alt=""
              />
            </Bounce>

            <a
              href="https://github.com/NieamulKabir"
              target="_blank"
              rel="noreferrer"
              className="px-4 transform transition duration-300 hover:scale-110 border-bottom border-b-2 border-emerald-400 bg-slate-300 text-3xl py-2 dark:bg-zinc-700 dark:text-white rounded m-2"
            >
              <i className="fab fa-github text-slate-700 dark:text-slate-300 dark:hover:text-emerald-400 transition duration-300"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/md-nieamul-kabir-101b491b2/"
              target="_blank"
              rel="noreferrer"
              className="px-4 transform transition duration-300 hover:scale-110 border-bottom border-b-2 border-emerald-400 bg-slate-300 dark:bg-zinc-700 text-3xl py-2 dark:text-white rounded m-2"
            >
              <i className="fab fa-linkedin text-slate-700 dark:text-slate-300 dark:hover:text-emerald-400 transition duration-300"></i>
            </a>
          </div>
          <div className="lg:w-2/3 text-center lg:text-left lg:pl-10">
            <h1 className=" text-2xl lg:text-4xl text-slate-800  dark:text-emerald-400 pt-10 lg:pt-0">
              Md.Nieamul Kabir
            </h1>
            <p className=" italic font-extralight lg:text-xl text-gray-700 dark:text-gray-400 pt-2">
              A passionate Web Developer
            </p>
            <br />
            <p className="text-gray-600 dark:text-gray-400 lg:w-full text-start">
              I have completed BSc in the department of Computer Science and
              Engineering at Daffodil international university. I love to create
              new things and learn every day.I am passionate about web
              developing. Building user-friendly websites and applications is
              truly a passion of mine and I am confident I would be an excellent
              addition to any organization. In addition to my knowledge base, I
              actively seek out new technologies and stay up-to-date on industry
              trends and advancements.
            </p>
            <p className="text-gray-600 mt-2 lg:w-full text-start">
              I am looking for an opportunity To take a challenging role as a
              developer in an atmosphere where I can learn new things , utilize
              my skills, abilities and contribute my skills and specializations
              to aid my community.
            </p>
            <br />
            <h3 className="text-sm lg:text-lg mb-5   dark:text-gray-400 text-start">
              Web Technologies I'm using so far:
            </h3>
            <div className="text-start">
              <p>Expertise</p>
              <Wobble>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  {" "}
                  html
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  {" "}
                  css
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  {" "}
                  JavaScript
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  {" "}
                  TypeScript
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  {" "}
                  JavaScript ES6+
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  {" "}
                  Bootstrap
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  {" "}
                  TailwindCSS
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  {" "}
                  React
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  {" "}
                  React Router
                </button>
              </Wobble>
              <p>Familiar</p>
              <Wobble>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  Redux
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  {" "}
                  Redux Toolkit
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  {" "}
                  RTK Query
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  {" "}
                  Next.js
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  {" "}
                  Vite
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  {" "}
                  Material UI
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  {" "}
                  REST API
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  {" "}
                  FireBase
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  {" "}
                  FireBase Hooks
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  {" "}
                  Node.JS
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  {" "}
                  Express
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  {" "}
                  MongoDB
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  {" "}
                  Mongoose
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  {" "}
                  Material UI
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500  text-white rounded-full m-1">
                  {" "}
                  JSON Server
                </button>
              </Wobble>
            </div>{" "}
            <br />
            <h3 className="text-sm lg:text-lg mb-5 text-gray-600 text-start">
              Tools & Softwares I use:
            </h3>
            <div className="text-start">
              <Wobble>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500 text-white  rounded-full m-1">
                  {" "}
                  VS Code
                </button>
               
               
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500 text-white  rounded-full m-1">
                  {" "}
                  GitHub
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500 text-white  rounded-full m-1">
                  {" "}
                  Render
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500 text-white  rounded-full m-1">
                  {" "}
                  Vercel
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500 text-white  rounded-full m-1">
                  {" "}
                  Netlify
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500 text-white  rounded-full m-1">
                  {" "}
                  Figma
                </button>
                <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500 text-white  rounded-full m-1">
                  {" "}
                Postman
                </button>
              </Wobble>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

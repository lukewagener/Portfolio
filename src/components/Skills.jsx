import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Node from "../assets/node.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-black text-gray-300 w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-red-300">
            Experience
          </p>
          <p className="py-4">
            // These are the technologies I've worked with the most
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center ppy-8">
          <div className="shadow-md shadow-gray-700 hover:scale-110 duration-500">
            <img src={HTML} alt="HTML icon" className="w-20 mx-auto" />
            <p>HTML</p>
          </div>

          <div className="shadow-md shadow-gray-700 hover:scale-110 duration-500">
            <img src={CSS} alt="CSS icon" className="w-20 mx-auto" />
            <p>CSS</p>
          </div>

          <div className="shadow-md shadow-gray-700 hover:scale-110 duration-500">
            <img src={Javascript} alt="JS icon" className="w-20 mx-auto" />
            <p>JAVASCRIPT</p>
          </div>

          <div className="shadow-md shadow-gray-700 hover:scale-110 duration-500">
            <img src={ReactImg} alt="React icon" className="w-20 mx-auto" />
            <p>REACT</p>
          </div>

          <div className="shadow-md shadow-gray-700 hover:scale-110 duration-500">
            <img src={Node} alt="Node icon" className="w-20 mx-auto" />
            <p>NODE.JS</p>
          </div>

          <div className="shadow-md shadow-gray-700 hover:scale-110 duration-500">
            <img src={GitHub} alt="Github icon" className="w-20 mx-auto" />
            <p>GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

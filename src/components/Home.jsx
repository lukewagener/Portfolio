import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#000000]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-300">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Lukas Wagener
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-red-300">
          I'm an aspiring Full-Stack Developer.
        </h2>
        <p className="text-gray-200 py-4 max-w-[700px]">
          I'm currently a second-year Business IT student at Red River College
          Polytechnic. My main focus is building functional Full-Stack apps and
          expanding my skills and knowledge through real world projects.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-300 hover:border-red-300">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

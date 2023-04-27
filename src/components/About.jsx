import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#000000] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-300">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hey there! Nice to meet you. I'm Lukas. Please have a look around!
            </p>
          </div>
          <div>
          <p>
            I am passionate about learning new tech and discovering new ways of
            development. Creating visual interfaces and pairing them with
            functional backends is something I find extremely satisfying. I hope
            to one day take my skills and create something that truly has a
            positive impact on our world. So, let me know if you need help with
            your next project!
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;

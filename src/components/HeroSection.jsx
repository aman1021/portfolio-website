"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-5xl font-extrabold">
            <span className="text-slate-200">Hello I &apos;m </span>
            <br/>
            <TypeAnimation
            className="text-yellow-200"
              sequence={[
                "Aman",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
          I am a full stack web developer with a passion for creating
          interactive and responsive web applications.
          </p>
          <div>
            <button  className="text-black w-full sm:w-fit px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200">
              <a href="mailto:amaniiitu32@gmail.com">Contact Me</a>
            </button>
            <button  className="text-white w-full sm:w-fit px-6 py-3 rounded-full bg-transparent  hover:bg-slate-800 border border-white mt-3">
             <a target="_blank" href="https://drive.google.com/file/d/13jGDT4NG43HRgJTfN4330nrjZKv8TK_T/view">View Resume</a>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-8 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/portpic.jpg"
              alt="hero-Image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

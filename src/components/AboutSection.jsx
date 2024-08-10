"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "Skills",
    content: (
      <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 pl-2">
        <li className="p-2  rounded-full text-center bg-[#121212] hover:bg-white hover:text-black">
          Javascript
        </li>
        <li className="p-2  rounded-full text-center bg-[#121212] hover:bg-white hover:text-black">
          React.js
        </li>
        <li className="p-2  rounded-full text-center bg-[#121212] hover:bg-white hover:text-black">
          Next.js
        </li>
        <li className="p-2 rounded-full text-center bg-[#121212] hover:bg-white hover:text-black">
          React Native
        </li>
        <li className="p-2 rounded-full text-center bg-[#121212] hover:bg-white hover:text-black">
          Node.js
        </li>
        <li className="p-2  rounded-full text-center bg-[#121212] hover:bg-white hover:text-black">
          Express
        </li>
        <li className="p-2  rounded-full text-center bg-[#121212] hover:bg-white hover:text-black">
          Tailwind CSS
        </li>
        <li className="p-2  rounded-full text-center bg-[#121212] hover:bg-white hover:text-black">
          Git
        </li>
        <li className="p-2  rounded-full text-center bg-[#121212] hover:bg-white hover:text-black">
          Typescript
        </li>
        <li className="p-2  rounded-full text-center bg-[#121212] hover:bg-white hover:text-black">
          MongoDB
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul className="list-disc pl-2 ">
        <li>Indian Institute Of Information Technology, Una(2018-2022)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl-gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="about-image" height={500} width={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <h1 className="text-4xl font-bold text-white mb-4">About me.</h1>
          <p className="text-base lg:text-lg ">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React.js, Next.js, Redux, Node.js, Express, HTML,
            CSS, and Git. I am a quick learner and I am always looking to expand
            my knowledge and skill set. I am a team player and I am excited to
            work with others to create amazing applications.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("Skills")}
              active={tab === "Skills"}
            >
              {" "}
              Skills
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("Education")}
              active={tab === "Education"}
            >
              {" "}
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

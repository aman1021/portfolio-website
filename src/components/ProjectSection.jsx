import React from "react";
import ProjectsCards from "./ProjectsCards";

const projectsData = [
  {
    id: 1,
    title: "Crypto-Tracker",
    description: "Crypto Dashboard is a user-friendly web app for tracking and managing cryptocurrency portfolios. It offers real-time data, market insights, and tools for informed decisions.",
    image: "/images/projects/crypto.png",
    tab: ["All", "Web"],
    gitUrl: "https://github.com/aman1021/Crypto",
    liveUrl: "https://crypto-aman1021.vercel.app/"
  },
  {
    id: 2,
    title: "Article-Summarizer",
    description: "The website integrates the AI-Summarizer API from Rapid API for effortless article summaries and saves browsing history of URLs, allowing users to easily access and summarize previously used URLs.",
    image: "/images/projects/article.png",
    tab: ["All", "Web"],
    gitUrl: "https://github.com/aman1021/AI-summarizer",
    liveUrl:"https://animated-bavarois-897b55.netlify.app/"
  },
  {
    id: 3,
    title: "Portfolio-website",
    description: "I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Next, Redux, Node.js, Express, HTML, CSS, and Git.",
    image: "/images/projects/portfolio.png",
    tab: ["All", "Web"],
    gitUrl: "/",
    liveUrl:"/"
  },
];

const ProjectSection = () => {
  return (
    <div id="project">
      <h1 className="text-center text-white text-4xl font-bold mt-4">My Projects</h1>
      
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-8">
        {" "}
        {projectsData.map((project) => (
          <ProjectsCards
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            liveUrl={project.liveUrl}
          />
        ))}{" "}
      </div>
    </div>
  );
};

export default ProjectSection;

import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectsCards = ({ imgUrl, title, description, gitUrl, liveUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay  items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            title="Github Url"
            className="h-14 w-14 mr-4 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE]  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={liveUrl}
            title="Live Url"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE]  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white text-centerrounded-b-xl mt-2 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2 ">{title}</h5>
        <p className="text-[#ADB7BE]"> {description} </p>
      </div>
    </div>
  );
};

export default ProjectsCards;

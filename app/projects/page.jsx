import ProjectTwo from "@/components/Project";
import React from "react";

const Projects = () => {
  return (
    <>
      <div className="bg-theme_black-900">
        <p className="uppercase text-theme_white-900 text-4xl pt-12 py-10 mx-auto w-fit ">
          projects
        </p>
        <ProjectTwo />
      </div>
    </>
  );
};

export default Projects;

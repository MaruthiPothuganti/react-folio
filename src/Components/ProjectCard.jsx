import React from "react";

export const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-2xl p-2 md:flex rounded-lg border-2 border-stone-900 hover:border-stone-800">
      <img
        className="w-full md:w-[15rem] h-40 rounded-lg"
        src={project.imgURL}
        alt="project"
      />
      <div className="grid p-4 gap-1 md:gap-2">
        <h2 className="text-xl md:text-2xl">{project.title}</h2>
        <p className="text-sm text-slate-400">{project.type}</p>
        <p className="hidden md:block">{project.tldr}</p>
      </div>
    </div>
  );
};

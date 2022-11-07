import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../Components/projects";

export const Project = () => {
  const params = useParams();
  const { title } = params;

  const currentProject = projects.find((project) => project.title === title);
  console.log(currentProject);
  return (
    <main className="flex-1 h-screen w-full grid place-items-center text-white overflow-y-auto">
      <article className="w-[90%] md:w-[auto] grid gap-4  mb-[10%] mt-[10%]">
        <h1 className="text-4xl md:text-5xl text-center">
          {currentProject.title}
        </h1>
        <section className="">
          <div className="max-w-2xl p-2  rounded-lg border-2 border-stone-900 hover:border-stone-800">
            <div className="">
              <img
                className="w-full h-[50%] rounded-lg"
                src={currentProject.imgURL}
                alt="Maruthi Pothuganti"
              />
              <div className="my-3">
                <h2 className="text-2xl font-bold my-2">Tech Stack Used :-</h2>
                <div className="my-4 gap-3 flex flex-wrap">
                  {currentProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="border-[1px] rounded-sm p-2 text-center"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <hr className="border-stone-900" />
              <div className="my-3">
                <h2 className="text-2xl font-bold my-2">Description</h2>
                <p className="md:text-lg text-justify">
                  {currentProject.description}
                </p>
              </div>
            </div>
            <hr className="border-stone-900" />
            <div className="my-3">
              <h2 className="text-2xl font-bold my-2">Important links</h2>
              <div className="flex gap-8 justify-center">
                {currentProject.links.map((link) => (
                  <a
                    href={link.hyperlink}
                    className="text-center px-4 py-2 rounded-lg border-2  border-stone-900 hover:border-stone-700"
                  >
                    {link.icon && (
                      <link.icon size={22} className="inline-flex mx-2" />
                    )}
                    {link.type}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

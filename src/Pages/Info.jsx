import React from "react";
import {
  SiInfosys,
  CgHello,
  SiRedux,
  TbBrandTailwind,
  RiReactjsLine,
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  FaUserGraduate,
  FaGraduationCap,
} from "../Components/Icons";
import { Link } from "react-router-dom";

export const Info = () => {
  const skiller = [
    { icon: TbBrandHtml5, skill: "HTML5" },
    { icon: TbBrandCss3, skill: "CSS3" },
    { icon: TbBrandJavascript, skill: "Javascript" },
    { icon: RiReactjsLine, skill: "ReactJS" },
    { icon: SiRedux, skill: "Redux Toolkit" },
    { icon: TbBrandTailwind, skill: "TailwindCSS" },
    { icon: "", skill: "ES6+" },
    { icon: "", skill: "Responsive Web Design" },
  ];

  return (
    <main className="h-screen w-full grid place-items-center text-white overflow-y-auto">
      <article className="w-[90%] md:w-[auto] grid gap-8 mb-[10%] mt-[10%]">
        <h1 className="text-4xl md:text-5xl text-center">Meet Maruthi</h1>
        <section className="">
          <div className="max-w-2xl p-2  rounded-lg border-2 border-stone-900 hover:border-stone-800">
            <div className="">
              <img
                className="w-full h-[50%] rounded-lg"
                src="https://res.cloudinary.com/doo5jbomi/image/upload/v1661442940/Video%20Library/web_dev_destjb.jpg"
                alt="Maruthi Pothuganti"
              />
              <div className="my-3">
                <h2 className="text-2xl font-bold my-2">About Me</h2>
                <p className="md:text-lg text-justify">
                  Hi, I'm Maruthi, a Frontend Developer from India. As a
                  software engineer, I enjoy bridging the gap between
                  engineering and design — combining my technical knowledge with
                  my keen eye for design to create a beautiful product. My goal
                  is to always build applications that are scalable and
                  efficient under the hood while providing engaging,
                  pixel-perfect user experiences.
                </p>
              </div>
              <hr className="border-stone-900" />
              <div className="my-3">
                <h2 className="text-2xl font-bold my-2">Experience</h2>
                <div className="flex my-4">
                  <div className="flex p-1 gap-2">
                    <div className="p-4 rounded-full border-2 border-stone-900">
                      <SiInfosys size={46} />
                    </div>
                    <div className="self-center">
                      <h3 className="font-bold text-xl">Infosys</h3>
                      <p className="text-slate-400">
                        Systems Engineer • 2021-2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-3">
                <h2 className="text-2xl font-bold my-2">Education</h2>
                <div className="flex my-4 gap-2">
                  <div className="flex p-1 gap-2">
                    <div className="p-4 rounded-full border-2 border-stone-900">
                      <FaUserGraduate size={46} />
                    </div>
                    <div className="self-center">
                      <h3 className="font-bold text-xl">VITS(Karimnagar)</h3>
                      <p className="text-slate-400">B.Tech(EEE) • 2017-2020</p>
                    </div>
                  </div>
                  <div className="flex p-1 gap-2">
                    <div className="p-4 rounded-full border-2 border-stone-900">
                      <FaGraduationCap size={46} />
                    </div>
                    <div className="self-center">
                      <h3 className="font-bold text-xl">GP(Bellampalli)</h3>
                      <p className="text-slate-400">Diploma(EEE) • 2015-2017</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-stone-900" />
              <div className="my-3">
                <h2 className="text-2xl font-bold my-2">Skills</h2>
                <div className="my-4 gap-3 flex flex-wrap">
                  {skiller.map((skill) => (
                    <span
                      key={skill.skill}
                      className="border-[1px] rounded-sm p-2 text-center"
                    >
                      {skill.icon && (
                        <skill.icon size={22} className="inline-flex" />
                      )}
                      {skill.skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <hr className="border-stone-900" />
            <Link to="/contact">
              <button className="text-2xl my-4 border-[1px] px-4 py-2  rounded-md hover:bg-white hover:text-black">
                Get in Touch
                <span>
                  <CgHello className="inline-flex mx-2" />
                </span>
              </button>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
};

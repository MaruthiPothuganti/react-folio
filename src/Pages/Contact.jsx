import React from "react";
import { FiArrowUpRight } from "../Components/Icons";

export const Contact = () => {
  return (
    <main className="h-screen w-full grid place-items-center text-white">
      <article className="w-[90%] md:w-[auto] grid gap-4">
        <div className="text-center leading-relaxed">
          <h1 className="text-4xl md:text-5xl mb-8">The Stage is Yours</h1>
          <p className="text-lg tracking-wide">
            I’m always looking to collaborate on interesting projects with great
            people.
            <br /> Need a supportive hand? I have two!
          </p>
        </div>
        <div className="border-2 rounded-lg py-4 border-stone-900 hover:border-stone-700">
          <div className="flex flex-col text-center gap-3 m-4">
            <img
              className="w-36 h-auto rounded-full inline-flex self-center"
              src="https://res.cloudinary.com/doo5jbomi/image/upload/v1667316629/PomodoroApp/maruthi_kqyegf.gif"
              alt="profile"
            />
            <h2 className="text-2xl font-bold tracking-wide">
              Maruthi Pothuganti
            </h2>
            <p className="text-slate-400">Frontend Developer</p>
            <div className="flex gap-8 justify-center">
              <a
                href="mailto:maruthicharypothuganti@gmail.com"
                className="px-4 py-2 rounded-lg border-2  border-stone-900 hover:border-stone-700"
              >
                Drop a mail
              </a>
              <a
                href="tel:+919908229924"
                className="px-4 py-2 rounded-lg border-2  border-stone-900 hover:border-stone-700"
              >
                Have a call
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-6 justify-center my-4">
          <a
            href="https://github.com/MaruthiPothuganti"
            target="_blank"
            className="hover:text-slate-400"
            rel="noreferrer"
          >
            Github
            <FiArrowUpRight className="inline-flex" />
          </a>
          <a
            href="https://twitter.com/maruthithedev"
            target="_blank"
            className="hover:text-slate-400"
            rel="noreferrer"
          >
            Twitter
            <FiArrowUpRight className="inline-flex" />
          </a>
          <a
            href="https://www.linkedin.com/in/maruthipothuganti/"
            target="_blank"
            className="hover:text-slate-400"
            rel="noreferrer"
          >
            LinkedIn
            <FiArrowUpRight className="inline-flex" />
          </a>
        </div>
      </article>
    </main>
  );
};

import React from "react";
import { FiArrowRight } from "../Components/Icons";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <main className="h-screen w-full grid place-items-center text-white">
      <article className="w-[90%] md:w-[auto] grid gap-4">
        <div className="text-4xl md:text-5xl text-center leading-relaxed">
          <p>
            Hey, I'm{" "}
            <span>
              <img
                className="w-20 h-auto rounded-full inline-flex"
                src="https://res.cloudinary.com/doo5jbomi/image/upload/v1667316629/PomodoroApp/maruthi_kqyegf.gif"
                alt="profile"
              />
            </span>{" "}
            Maruthi.
          </p>
          <p>How can I help you ?</p>
        </div>
        <div className="text-sm grid gap-4">
          <Link to="/projects">
            <div className="flex items-center justify-between px-2 py-3 rounded-md border-2 border-stone-900 hover:border-stone-700 hover:text-stone-400">
              <p>A. I heard you build great apps & websites!</p>
              <span>
                <FiArrowRight />
              </span>
            </div>
          </Link>
          <Link to="/blogs">
            <div className="flex items-center justify-between px-2 py-3 rounded-md border-2 border-stone-900 hover:border-stone-700 hover:text-stone-400">
              <p>B. I like reading about tech!</p>
              <span>
                <FiArrowRight />
              </span>
            </div>
          </Link>
          <Link to="/about">
            <div className="flex items-center justify-between px-2 py-3 rounded-md border-2 border-stone-900 hover:border-stone-700 hover:text-stone-400">
              <p>C. Maruthi, who ?!</p>
              <span>
                <FiArrowRight />
              </span>
            </div>
          </Link>
        </div>
        <div className="text-xs text-center m-4 animate-bounce">
          <Link to="/contact">Never Mind - Just Say HI</Link>
        </div>
      </article>
    </main>
  );
};

import React from "react";

export const Blogs = () => {
  return (
    <main className="h-screen w-full grid place-items-center text-white">
      <article className="w-[90%] md:w-[auto] grid gap-8 mb-[10%] mt-[10%]">
        <h1 className="text-5xl text-center">Thoughts</h1>
        <section className=" text-center">
          <div className="max-w-2xl p-2  rounded-lg border-2 border-stone-900 hover:border-stone-800">
            <img
              className="w-full h-[80%] rounded-lg"
              src="https://res.cloudinary.com/doo5jbomi/image/upload/v1661442940/Video%20Library/web_dev_destjb.jpg"
              alt="project"
            />
            <div className="grid p-1 gap-1">
              <h6 className="text-2xl">blog</h6>
              <p className="text-sm text-slate-400">type - date</p>
            </div>
          </div>
          Coming soon...
        </section>
      </article>
    </main>
  );
};

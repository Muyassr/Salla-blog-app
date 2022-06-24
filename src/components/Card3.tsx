import { Blog } from "../models/models";
import { useState } from "react";

interface props {
  blog: Blog;
  blogType: number;
}

const Card3 = ({ blogType, blog }: props) => {
  return (
    <>
      <div className="ideas-blog-card col-span-4 h-40 ">
        <div className="flex relative h-full">
          <div
            className={`ideasBlog-image ${blog.img} rounded w-48 h-auto  }`}
          ></div>
          <div className="content flex flex-col justify-center text-right lg:w-80 lg:h-full pr-5 dark:bg-slate-800 ">
            <h5 className="mb-2 text-sm text--neutral-800 dark:text-white border-r-2 border-emerald-400 pr-2">
              أفكار بزنس
            </h5>
            <h5 className="mb-2 text-lg text-black dark:text-white font-medium">
              {blog.title}
            </h5>
            <p className="mb-3 text-base text-neutral-600 dark:text-white">
              {blog.content.length > 80
                ? blog.content.substring(0, 80) + "..."
                : blog.content}
            </p>
            <h3 className="text-sm dark:text-white">بواسطة {blog.author}</h3>
            <a href="#" className="block absolute inset-0"></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card3;

import { Blog } from "../models/models";
import { useState } from "react";

interface props {
  blog: Blog;
  blogType: number;
}

const Card2 = ({ blogType, blog }: props) => {
  const [isBigImg, setisBigImg] = useState(blogType == 2 || blogType == 4);
  return (
    <>
      <div
        className={`ideas-blog-card ${
          isBigImg ? "lg:row-span-3 lg:col-span-8 col-span-4 " : ""
        }`}
      >
        <div className="flex relative lg:flex-col">
          <div
            className={`ideasBlog-image rounded ${blog.img} w-full ${
              isBigImg ? "lg:h-[22rem] lg:w-auto w-48" : "h-56"
            }`}
          ></div>
          <div className="content text-right w-full h-auto pt-5 bg-white dark:bg-slate-800 dark:text-white p-5">
            <h5 className="mb-2 text-sm text--neutral-800 border-r-2 border-emerald-400 pr-2">
              أفكار بزنس
            </h5>
            <h5 className="mb-2 text-lg text-black dark:text-white font-medium">
              {blog.title}
            </h5>
            <p className="mb-3 text-base text-neutral-600 dark:text-white">
              {blog.content}
            </p>
            <h3 className="text-sm">بواسطة {blog.author}</h3>
            <a href="#" className="block absolute inset-0"></a>
          </div>
        </div>
      </div>
      {/* <div className="ideas-blog-card row-span-3 col-span-8  min-w-[50%]">
        <div className="flex relative flex-col">
          <div
            className={`ideasBlog-image rounded img-ideas-1 w-full h-[22rem]`}
          ></div>
          <div className="content text-right w-full h-auto pt-5 ">
            <h5 className="mb-2 text-sm text--neutral-800 border-r-2 border-emerald-400 pr-2">
              أفكار بزنس
            </h5>
            <h5 className="mb-2 text-lg text-black font-medium">
              {blog.title}
            </h5>
            <p className="mb-3 text-base text-neutral-600">{blog.content}</p>
            <h3 className="text-sm">بواسطة {blog.author}</h3>
            <a href="#" className="block absolute inset-0"></a>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Card2;

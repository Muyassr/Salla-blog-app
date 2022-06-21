import { Blog } from "../models/models";
import { useState } from "react";

interface props {
  blog: Blog;
  blogType: number;
}

const Card2 = ({ blogType, blog }: props) => {
  return (
    <>
      <div className={`ideas-blog-card ${blogType==2?'row-span-3 col-span-8':''}`}>
        <div className="flex relative flex-col">
          <div
            className={`ideasBlog-image rounded img-ideas-1 w-full ${blogType==2?'h-[22rem]':'h-56'}`}
          ></div>
          <div className="content text-right w-full h-auto pt-5 bg-white p-5">
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

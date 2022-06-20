import { useState } from "react";
import { Blog } from "../models/models";

interface props {
  blog: Blog;
  index: number;
}

const IdeasBlogCard = ({ index, blog }: props) => {
  const [isFirst, setIsFirst] = useState(index == 0);
  return (
    <>
      <div
        className={`ideas-blog-card ${
          isFirst ? "row-span-3 col-span-8" : "col-span-4  h-40"
        }`}
      >
        <div className={`flex relative ${isFirst ? "flex-col" : "h-full"}`}>
          <div
            className={`ideasBlog-image rounded ${blog.img} ${
              isFirst ? "w-full h-[22rem]" : "w-48 h-auto"
            }`}
          ></div>
          <div
            className={`content text-right ${
              isFirst ? "w-full h-auto pt-5" : "w-80 h-full pr-5"
            }`}
          >
            <h5 className="mb-2 text-sm text--neutral-800 border-r-2 border-emerald-400 pr-2">أفكار بزنس</h5>
            <h5 className="mb-2 text-lg text-black font-medium">{blog.title}</h5>
            <p className="mb-3 text-base text-neutral-600">{blog.content}</p>
            <h3 className="text-sm">بواسطة {blog.author}</h3>
            <a href="#" className="block absolute inset-0"></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdeasBlogCard;

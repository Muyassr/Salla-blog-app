import { useState } from "react";
import { Blog } from "../models/models";

interface props {
  blog: Blog;
  index: number;
}

const IdeasBlogCard = ({ index, blog }: props) => {
    const [isFirst, setIsFirst] = useState(index == 0);
    // setIsFirst(index === 0);
  return (
    <>
    <div className={`ideas-blog-card ${isFirst?'row-span-6 col-span-8 bg-red-100':'col-span-4 bg-blue-100'}`}>
        <a href="#" className="h-full block">
            <div className={`flex ${isFirst?'flex-col':'h-full'}`}>
                    <div className={`ideasBlog-image bg-lime-400 ${blog.img} ${isFirst?'w-full h-[22rem]':'w-48 h-auto'}`}></div>
                    <div className={`content bg-orange-500 ${isFirst?'w-full h-auto':'w-80 h-full'}`}>
                        <h5 className="mb-2 text-lg ">{blog.category}</h5>
                        <p className="mb-3 text-base">{blog.content}</p>
                        <h3 className="text-sm">بواسطة {blog.author}</h3>
                    </div>
            </div>
        </a>
    </div>
    </>
  );
};

export default IdeasBlogCard;

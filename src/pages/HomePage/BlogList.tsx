import React from "react";
import { Blog } from "../../models/models";
import MostReadCard from "../../components/MostReadCard";
import IdeasBlogCard from "../../components/IdeasBlogCard";

interface props {
  blogs: Array<Blog>;
  blogType: string;
}

const BlogList = ({ blogs, blogType }: props) => {
  return (
    <>
      {blogType === "MostReadCard" &&
        blogs?.map((blog, index) => (
          <MostReadCard key={blog.id} blog={blog} index={index} />
        ))}
      {blogType === "IdeasBlogCard" &&
        blogs?.map((blog, index) => (
          <IdeasBlogCard key={blog.id} blog={blog} index={index} />
        ))}
    </>
  );
};

export default BlogList;

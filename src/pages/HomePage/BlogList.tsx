import React from "react";
import { Blog } from "../../models/models";
import MostReadCard from "./MostReadCard";

interface props {
  blogs: Array<Blog>;
}

const BlogList = ({ blogs }: props) => {
  return (
    <>
      {blogs?.map((blog, index) => (
        <MostReadCard key={blog.id} blog={blog} />
      ))}
    </>
  );
};

export default BlogList;

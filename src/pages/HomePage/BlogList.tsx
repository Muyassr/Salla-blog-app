import React from "react";
import { Blog } from "../../models/models";
import MostReadCard from "../../components/MostReadCard";
import IdeasBlogCard from "../../components/IdeasBlogCard";
import Card2 from "../../components/card2";
import Card3 from "../../components/card3";
import Card1 from "../../components/card1";

interface props {
  blogs: Array<Blog>;
  blogType: number;
}

const BlogList = ({ blogs, blogType }: props) => {
  console.log(blogType, blogs);

  return (
    <>
      {blogType === 1 &&
        blogs?.map((blog, index) => {
          return <Card1 key={blog.id} blog={blog} blogType={blogType} />;
        })}

      {blogType === 2 &&
        blogs?.map((blog, index) => {
          return index === 0 ? (
            <Card2 key={blog.id} blog={blog} blogType={blogType} />
          ) : (
            <Card3 key={blog.id} blog={blog} blogType={blogType} />
          );
        })}

      {blogType === 3 &&
        blogs?.map((blog, index) => {
          return <Card2 key={blog.id} blog={blog} blogType={blogType} />;
        })}
    </>
  );
};

export default BlogList;

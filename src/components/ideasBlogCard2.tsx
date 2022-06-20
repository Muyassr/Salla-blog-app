import { useState } from "react";
import { Blog } from "../models/models";

interface props {
  blog: Blog;
  index: number;
}

// const IdeasBlogCard2 = ({ index, blog }: props) => {
const IdeasBlogCard2 = () => {
  return <>
    <div className="grid grid-rows-3 grid-flow-col gap-4 bg-red-200">
        <div className="col-span-6 bg-blue-100 ">01</div>
        <div className="col-span-6 bg-slate-300">02</div>
        <div className=" col-span-6 bg-yellow-200">03</div>
        <div className="row-span-3 col-span-6 bg-green-200">04</div>
      </div>
  </>;
};

export default IdeasBlogCard2;

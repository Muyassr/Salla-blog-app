import { Blog } from "../models/models";

interface props {
  blog: Blog;
  index: number;
}

const Card1 = ({ index, blog }: props) => {
  return (
    <>
      <div className="most-read-card relative flex flex-col h-60 p-5 text-right min-w-sm border rounded border-gray-200 text-white dark:bg-gray-800 dark:border-gray-700">
        <div className={`bg-mostRead-image rounded ${blog.img}`}></div>
        <div className="mt-auto">
          <h5 className="mb-2 text-lg ">{blog.category}</h5>
          <p className="mb-3 text-base">{blog.content}</p>
          <h3 className="text-sm">بواسطة {blog.author}</h3>
        </div>
        <a href="#" className="block absolute inset-0"></a>
      </div>
    </>
  );
};

export default Card1;

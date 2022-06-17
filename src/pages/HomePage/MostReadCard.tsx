import { Blog } from "../../models/models";

interface props {
  blog: Blog;
}

const MostReadCard = ({ blog }: props) => {
  return (
    <>
      <a href="#" className="">
        <div className="flex flex-col h-60 text-right max-w-sm bg-black bg-opacity-50 bg-blend-overlay border border-gray-200 text-white dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 mt-auto">
            <h5 className="mb-2 text-lg ">{blog?.category}</h5>
            <p className="mb-3 text-base">{blog?.content}</p>
            <h3 className="text-sm">بواسطة {blog?.author}</h3>
          </div>
        </div>
      </a>
    </>
  );
};

export default MostReadCard;

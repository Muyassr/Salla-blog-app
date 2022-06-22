import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Blog } from "../../models/models";

interface probs {
  blogId: number;
}

const baseURL = "https://62ace799402135c7acba8b3b.mockapi.io/";

const ReportDetails = ({ blogId }: probs) => {
  const [blog, setBlog] = useState<Blog>();
  const location = useLocation();
//   const { blogId } = location.state;
  console.log(blogId);

  useEffect(() => {
    //get blog details
    axios.get(`${baseURL}blogs/${blogId}`).then((response) => {
      setBlog(response.data);
    });
  }, []);
  return (
    <>
      <div className=""></div>

      <div className="h-10 w-10 text-right rounded bg-red-300">
        <div className="content w-2/4 pr-28 pt-20">
          {/* <h5 className="mb-2 text-sm text--neutral-800 border-r-2 border-emerald-400 pr-2">
            أفكار بزنس
          </h5> */}
          {/* <h5 className="mb-2 text-4xl">{blog.title}</h5> */}
          {/* <p className="mb-3 text-lg">{blog.content}</p> */}
          {/* <h3 className="text-sm">بواسطة {blog.author}</h3> */}
          <a href="#" className="block absolute inset-0"></a>
        </div>
      </div>

      <h2>report details</h2>
    </>
  );
};

export default ReportDetails;

import axios from "axios";
import { useEffect, useState } from "react";
import { Blog } from "../../models/models";
import BlogList from "../HomePage/BlogList";

const baseURL = "https://62ace799402135c7acba8b3b.mockapi.io/";

const Reports: React.FC = () => {
  const [ideasBlogs, setideasBlogs] = useState<Array<Blog>>([]);
  useEffect(() => {
    //get blogs
    axios.get(`${baseURL}blogs`).then((response) => {
      setideasBlogs(response.data);
    });
  }, []);
  return (
    <>
      <section id="reposrts" className="my-[4.375rem] px-52">
        <h2 className="text-4xl font-medium mb-10 text-center">
          التقارير والدراسات
        </h2>
        <div className="grid grid-cols-4 gap-4">
          <BlogList blogs={ideasBlogs} blogType={5} />
        </div>
      </section>
    </>
  );
};

export default Reports;

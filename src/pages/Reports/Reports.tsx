import axios from "axios";
import { useEffect, useState } from "react";
import Empty from "../../Empty";
import { Blog } from "../../models/models";
import BlogList from "../HomePage/BlogList";
import Loading from "../Loading";

const baseURL = "https://62ace799402135c7acba8b3b.mockapi.io/";

const Reports: React.FC = () => {
  const [ideasBlogs, setideasBlogs] = useState<Array<Blog>>([]);
  const [isPending, setIsPending] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    //get blogs
    axios
      .get(`${baseURL}blogs`)
      .then((response) => {
        if (response.data.length > 0) {
          setIsEmpty(false);
          setIsPending(false);
          setideasBlogs(response.data);
        } else {
          setIsPending(false);
          setIsEmpty(true);
        }
      })
      .catch((response) => {
        console.log(response);
      });
  }, []);
  return (
    <>
      <section id="reposrts" className="my-10 lg:my-[4.375rem] px-10 2xl:px-52">
        <h2 className="text-4xl font-medium mb-10 text-center">
          التقارير والدراسات
        </h2>

        {isPending && <Loading />}
        {isEmpty && <Empty />}
        {!isEmpty && !isPending && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <BlogList blogs={ideasBlogs} blogType={5} />
          </div>
        )}
      </section>
    </>
  );
};

export default Reports;

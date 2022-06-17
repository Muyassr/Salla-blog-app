import Hero from "./Hero";
import { useEffect, useState } from "react";
import { Blog } from "../../models/models";
import BlogList from "./BlogList";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";

const baseURL = "https://62ace799402135c7acba8b3b.mockapi.io/";

const LandingPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Array<Blog>>([]);

  useEffect(() => {
    //get movies
    axios.get(`${baseURL}mostReadBlogs`).then((response) => {
      setBlogs(response.data);
    });
  }, []);

  return (
    // <Navbar/>/
    <>
      <Hero />
      <section id="mostRead" className="pb-5 px-52 mt-16">
        <div className="flex justify-between align-baseline mb-6">
          <h3 className="text-2xl">الأكثر قراءة</h3>
          <a href="#">
            <div className="flex items-center">
              <h4>عرض المزيد</h4>
              <IoIosArrowBack className="text-emerald-400" />
            </div>
          </a>
        </div>
        <div className="conatiner flex justify-between">
          <BlogList blogs={blogs} />
        </div>
      </section>
    </>
  );
};

export default LandingPage;

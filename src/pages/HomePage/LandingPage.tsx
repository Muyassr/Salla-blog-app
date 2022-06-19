import Hero from "./Hero";
import { useEffect, useState } from "react";
import { Blog } from "../../models/models";
import BlogList from "./BlogList";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import "./styles.scss";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import IdeasBlogs from "./IdeasBlogs";

const baseURL = "https://62ace799402135c7acba8b3b.mockapi.io/";

const LandingPage: React.FC = () => {
  const [mostReadBlogs, setMostReadBlogs] = useState<Array<Blog>>([]);
  const [ideasBlogs, setideasBlogs] = useState<Array<Blog>>([]);

  useEffect(() => {
    //get mostReadblogs
    axios.get(`${baseURL}mostReadBlogs`).then((response) => {
      setMostReadBlogs(response.data);
    });

    //get blogs
    axios.get(`${baseURL}blogs`).then((response) => {
      setideasBlogs(response.data);
    });
  }, []);

  return (
    // <Navbar/>/
    <>
      <div className="space-y-8"></div>
      {/* start Hero Section */}
      <Hero />
      {/* end Hero Section */}

      {/* start Most read section */}
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
        <div className="conatiner grid grid-cols-3 gap-8">
          <BlogList blogs={mostReadBlogs} blogType={"MostReadCard"} />
        </div>
      </section>
      {/* end Most read section */}

      {/* start blogs grid 1 section */}
      <section id="ideasBlogs" className="px-52">
        <div className="grid grid-rows-3 grid-flow-col gap-7 bg-yellow-100 h-[32rem]">
          <BlogList blogs={ideasBlogs} blogType={"IdeasBlogCard"} />
        </div>
      </section>
      {/* end blogs grid 1 section */}

      {/* start Newsletter section */}
      <NewsLetter />
      {/* end Newsletter section */}

      {/* start Newsletter section */}
      <Footer />
      {/* end Newsletter section */}
    </>
  );
};

export default LandingPage;

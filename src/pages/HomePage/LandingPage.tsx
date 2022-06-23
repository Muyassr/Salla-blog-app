import Hero from "./Hero";
import { useEffect, useState } from "react";
import { Blog } from "../../models/models";
import BlogList from "./BlogList";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import "./styles.scss";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import AdBanner from "./AdBanner";

const baseURL = "https://62ace799402135c7acba8b3b.mockapi.io/";

const LandingPage: React.FC = () => {
  const [mostReadBlogs, setMostReadBlogs] = useState<Array<Blog>>([]);
  const [ideasBlogs, setideasBlogs] = useState<Array<Blog>>([]);
  const [isPending, setIsPending] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  const blogTypes = {
    MostReadCard: 1,
    IdeasBlogCard: 2,
    ideasBlogs2: 3,
    ideasBlogs3: 4,
    reportsList: 5,
  };
  useEffect(() => {
    //get mostReadblogs
    // axios.get(`${baseURL}mostReadBlogs`).then((response) => {
    // setMostReadBlogs(response.data.slice(0, 3));
    // });

    //get blogs
    axios.get(`${baseURL}blogs`).then((response) => {
      if (response.data.length > 0) {
        setIsEmpty(false);
        setIsPending(false);
        setMostReadBlogs(response.data.slice(0, 3));
        setideasBlogs(response.data.slice(0, 4));
      } else {
        setIsPending(false);
        setIsEmpty(true);
      }
    });
  }, []);

  return (
    // <Navbar/>/
    <>
      <Hero />
      {isPending && <div>Loading...</div>}
      {isEmpty && <div>list is empty...</div>}
      {!isEmpty && !isPending && (
        <div className="flex flex-col mt-16 space-y-16 mb-[4.375rem]">
          {/* start Hero Section */}
          {/* end Hero Section */}

          {/* start Most read section */}
          <section id="mostRead" className="px-52">
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
              <BlogList blogs={mostReadBlogs} blogType={1} />
            </div>
          </section>
          {/* end Most read section */}

          {/* start ideas blogs grid 1 section */}
          <section id="ideasBlogs" className="px-52">
            <div className="grid grid-rows-3 grid-flow-col gap-6">
              <BlogList blogs={ideasBlogs} blogType={2} />
            </div>
          </section>
          {/* end ideas blogs grid 1 section */}

          {/* sperator */}
          <div className=" w-[73.125rem] border-t-2 border-neutral-200 mx-auto"></div>

          {/* start Ad banner section */}
          <section id="adBanner" className="px-52">
            <AdBanner />
          </section>
          {/* end Ad banner section */}

          {/* start ideas blogs 2 section */}
          <section id="ideasBlogs2" className="px-52">
            <div className="conatiner grid grid-cols-4 gap-8">
              <BlogList blogs={ideasBlogs} blogType={3} />
            </div>
          </section>
          {/* end ideas blogs 2 section */}

          {/* start ideas blogs grid 3 section */}
          <section id="ideasBlogs3" className="px-52">
            <div className="grid grid-rows-3 grid-flow-col gap-6">
              <BlogList blogs={ideasBlogs} blogType={4} />
            </div>
          </section>
          {/* end ideas blogs grid 3 section */}
        </div>
      )}
    </>
  );
};

export default LandingPage;

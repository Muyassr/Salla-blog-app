import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

interface props {}

const Footer: React.FC<props> = () => {
  return (
    <>
      <footer>
        <div className="bg-white  p-5 px-10 2xl:px-52 align-baseline text-slate-500 dark:bg-slate-800 ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="flex items-center justify-center lg:justify-start">
              <p className="dark:text-white">
                جميع الحقوق محفوظة
                <span className="text-black dark:text-slate-500">
                  {" "}
                  لشركة مدونة 2022{" "}
                </span>
              </p>
            </div>
            <div className="flex flex-col space-y-2 justify-center items-center lg:space-y-0 lg:space-x-reverse lg:space-x-2 lg:flex-row">
              <div className="flex space-x-2 space-x-reverse">
                <a
                  href="#"
                  className="rounded-full  flex justify-center items-center w-9 h-9 text-lg bg-slate-100 border border-stone-200 hover:bg-slate-200 transition-all"
                >
                  <FiFacebook />
                </a>
                <a
                  href="#"
                  className="rounded-full  flex justify-center items-center w-9 h-9 text-lg bg-slate-100 border border-stone-200 hover:bg-slate-200 transition-all"
                >
                  <FiTwitter />
                </a>
                <a
                  href="#"
                  className="rounded-full  flex justify-center items-center w-9 h-9 text-lg bg-slate-100 border border-stone-200 hover:bg-slate-200 transition-all"
                >
                  <AiOutlineInstagram />
                </a>
                <a
                  href="#"
                  className="rounded-full  flex justify-center items-center w-9 h-9 text-lg bg-slate-100 border border-stone-200 hover:bg-slate-200 transition-all"
                >
                  <HiOutlineMail />
                </a>
              </div>
              <div className="border-r-2 h-full"></div>
              <button className="bg-[#FF9F4B] hover:bg-[#f0913e] text-white font-bold py-2 px-4 rounded transition-all w-fit">
                كن كاتباً معنا
              </button>
            </div>
            <div className="flex items-center justify-center lg:justify-end dark:text-white">
              <a href="3">
                <p>الشروط والأحكام</p>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

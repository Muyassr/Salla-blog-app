import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useState } from "react";

interface props {
  darkModeToggle: (e: Event) => void;
}

const Navbar: React.FC<props> = ({ darkModeToggle }) => {
  const [isHidden, setIsHidden] = useState(true);
  console.log(isHidden);

  return (
    <>
      <div className="rtl bg-white flex p-5 justify-between align-baseline px-10 2xl:px-52 dark:bg-slate-800">
        <div className="flex items-center space-x-6 space-x-reverse">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl font-bold dark:text-white "
          >
            Blog | مدونة
          </Link>
          <div className="lg:flex space-x-8 space-x-reverse hidden">
            <Link
              to="/"
              className="dark:text-white hover:text-emerald-500  hover:underline underline-offset-8 transition-all"
            >
              الرئيسية
            </Link>
            <Link
              to="/reports"
              className="dark:text-white hover:text-emerald-500  hover:underline underline-offset-8 transition-all"
            >
              التقارير والدراسات
            </Link>
            <Link
              to="/x"
              className="dark:text-white hover:text-emerald-500  hover:underline underline-offset-8 transition-all"
            >
              المقالات
            </Link>
          </div>
        </div>
        <div className="lg:flex space-x-3 space-x-reverse hidden">
          <button className="rounded-full p-3 text-lg bg-slate-100 border border-stone-200 hover:bg-slate-200 transition-all">
            <BiSearchAlt2 />
          </button>
          <button
            onClick={darkModeToggle}
            className="rounded-full p-3 text-lg bg-slate-100 border border-stone-200 hover:bg-slate-200 transition-all"
          >
            <MdOutlineDarkMode />
          </button>
        </div>
        <div className="flex space-x-3 space-x-reverse lg:hidden">
          <button
            className="relative rounded-full p-3 text-lg bg-slate-100 border border-stone-200 hover:bg-slate-200 transition-all"
            onClick={() => setIsHidden(!isHidden)}
          >
            <GiHamburgerMenu />
            <div
              className={`flex flex-col items-baseline space-y-3 space-x-reverse bg-white p-3 rounded w-40 absolute z-10 left-0 -bottom-[15.5rem] border shadow ${
                isHidden ? "hidden" : ""
              }`}
            >
              <Link
                to="/"
                className="hover:text-emerald-500  hover:underline underline-offset-8 transition-all"
                onClick={() => setIsHidden(!isHidden)}
              >
                الرئيسية
              </Link>
              <Link
                to="/reports"
                className="hover:text-emerald-500  hover:underline underline-offset-8 transition-all"
              >
                التقارير والدراسات
              </Link>
              <Link
                to="/xx"
                className="hover:text-emerald-500  hover:underline underline-offset-8 transition-all"
              >
                المقالات
              </Link>
              <button className="rounded-full p-3 text-lg bg-slate-100 border border-stone-200 hover:bg-slate-200 transition-all">
                <BiSearchAlt2 />
              </button>
              <button
                onClick={darkModeToggle}
                className="rounded-full p-3 text-lg bg-slate-100 border border-stone-200 hover:bg-slate-200 transition-all"
              >
                <MdOutlineDarkMode />
              </button>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

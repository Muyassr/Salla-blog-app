import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="rtl bg-white flex p-5 px-52  justify-between align-baseline">
        <div className="flex items-center space-x-6 space-x-reverse">
          <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">
            Blog | مدونة
          </Link>
          <div className="flex space-x-8 space-x-reverse">
            <Link
              to="/"
              className="hover:text-emerald-500  hover:underline underline-offset-8 transition-all"
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
          </div>
        </div>
        <div className="flex space-x-3 space-x-reverse">
          <button className="rounded-full p-3 text-lg bg-slate-100 border border-stone-200 hover:bg-slate-200 transition-all">
            <BiSearchAlt2 />
          </button>
          <button className="rounded-full p-3 text-lg bg-slate-100 border border-stone-200 hover:bg-slate-200 transition-all">
            <MdOutlineDarkMode />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <div className="rtl bg-white flex p-5 px-14  justify-between align-baseline">
        <div className="flex items-center space-x-6 space-x-reverse">
          <a href="#" className="btn btn-ghost normal-case text-xl font-bold">
            Blog |مدونة
          </a>
          <div className="flex space-x-8 space-x-reverse">
            <a href="#" className="hover:text-emerald-500 hover:underline underline-offset-8 transition-all">الرئيسية</a>
            <a href="#" className="hover:text-emerald-500  hover:underline underline-offset-8 transition-all">التقارير والدراسات</a>
            <a href="#" className="hover:text-emerald-500  hover:underline underline-offset-8 transition-all">المقالات</a>
          </div>
        </div>
        <div className="flex space-x-4 space-x-reverse">
          <button className="rounded-full p-2 bg-slate-100 border border-stone-200 hover:bg-slate-200 transition-all">
            <BiSearchAlt2 />
          </button>
          <button className="rounded-full p-2 bg-slate-100 border border-stone-200 hover:bg-slate-200 transition-all">
            <MdOutlineDarkMode />
          </button>

        </div>
      </div>
    </>
  );
};

export default Navbar;

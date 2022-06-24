import { Link } from "react-router-dom";

interface props {}

const NotFound: React.FC<props> = () => {
  return (
    <>
      <section id="notFound" className="my-[4.375rem] px-10 lg:px-52 ">
        <div className="flex">
          <div className="container m-auto">
            <p className="mb-2 dark:text-white">الصفحة غير موجودة حالياً.</p>
            <Link to="/">
              <button className="bg-[#3c3c3c] hover:bg-[#3c3c3c] text-[#f8fffe] font-bold py-2 px-4 transition-all rounded">
                الرجوع الى الصفحة الرئيسة
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;

import { Link } from "react-router-dom";

interface probs {}

const NotFound: React.FC = () => {
  return (
    <>
      <section id="notFound" className="my-[4.375rem] px-52 ">
        <div className="flex">
          <div className="container m-auto">
            <p className="mb-2">الصفحة غير موجودة حالياً.</p>
            <Link to="/">
              <button className="bg-[#a3ded6] hover:bg-[#a7e1d9] text-[#f8fffe] font-bold py-2 px-4 transition-all rounded">
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

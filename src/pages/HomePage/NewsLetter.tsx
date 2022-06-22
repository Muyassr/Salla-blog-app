import { HiOutlineMail } from "react-icons/hi";

interface NewsLetterProps {}

const NewsLetter: React.FC<NewsLetterProps> = () => {
  return (
    <>
      <div className="form-wrapper px-52 py-10 flex justify-center bg-[#F7F7F7]">
        <form className="w-[35rem]">
          <div className="mb-6 ">
            <h3 className="text-xl mb-2">اشترك في النشرة البريدية</h3>
            <h3 className="text-base text-slate-500">
              وكن اول من يعلم كل جديد في عالم التجارة الالكترونية
            </h3>
          </div>
          <div className="input-wrapper relative">
            <HiOutlineMail className="absolute right-2 top-3 text-[#FF9F4B]" />
            <input
              type="text"
              className=" bg-white border pr-7 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="اكتب ايميلك"
            />
            <button className="bg-[#45beae] hover:bg-[#4cccbb] text-white font-bold py-2 px-4 h-full transition-all absolute left-0 top-0">
              اشتراك
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewsLetter;

import { HiOutlineMail } from "react-icons/hi";
import { useFormik } from "formik";
import { useState } from "react";

interface props {
  email: string;
}
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const NewsLetter: React.FC<props> = () => {
  const [isEmailVaid, setIsEmailVaid] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      // console.log(values);
      setIsEmailVaid(true);
    },
  });
  return (
    <>
      <div className="form-wrapper px-52 py-10 flex justify-center bg-[#F7F7F7]">
        <form
          className="w-[35rem]"
          action="/"
          onSubmit={formik.handleSubmit}
          noValidate
        >
          <div className="mb-6 ">
            <h3 className="text-xl mb-2">اشترك في النشرة البريدية</h3>
            <h3 className="text-base text-slate-500">
              وكن اول من يعلم كل جديد في عالم التجارة الالكترونية
            </h3>
          </div>
          <div className="input-wrapper relative">
            <HiOutlineMail className="absolute right-2 top-3 text-[#FF9F4B]" />
            <input
              id="email"
              name="email"
              type="email"
              className=" bg-white border pr-7 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="اكتب ايميلك"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <button className="bg-[#45beae] hover:bg-[#4cccbb] text-white font-bold py-2 px-4 h-full transition-all absolute left-0 top-0">
              اشتراك
            </button>
          </div>
          {formik.errors.email ? (
            <div className="text-red-600">{formik.errors.email}</div>
          ) : null}
          {isEmailVaid && !formik.errors.email ? (
            <div className="text-green-600">email submited</div>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default NewsLetter;

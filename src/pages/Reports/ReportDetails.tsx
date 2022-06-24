import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Blog } from "../../models/models";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import NotFound from "../NotFound";
import Loading from "../Loading";

interface probs {}

const baseURL = "https://62ace799402135c7acba8b3b.mockapi.io/";

const ReportDetails = ({}: probs) => {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog>();
  const [fontSize, setfontSize] = useState<string>("text-base");
  const [isPending, setIsPending] = useState(true);
  const [isBlogValid, setIsBlogValid] = useState(true);

  useEffect(() => {
    //get blog details
    axios
      .get(`${baseURL}blogs/${id}`)
      .then((response) => {
        setIsPending(false);
        setBlog(response.data);
      })
      .catch((response) => {
        setIsPending(false);
        setIsBlogValid(false);
      });
  }, []);

  return (
    <>
      {isPending && <Loading />}
      {!isBlogValid && <NotFound />}
      {!isPending && isBlogValid && (
        <section id="report-details" className="">
          <div className="report-header-bg text-right text-white py-14 px-10 2xl:px-52 space-y-6">
            <h5 className="mb-2 text-sm text--neutral-800 border-r-2 border-emerald-400 pr-2">
              أفكار بزنس
            </h5>
            <h5 className="mb-2 text-5xl font-bold">{blog?.title}</h5>
            <div className="author flex space-x-5 space-x-reverse">
              <h3 className="text-sm">بواسطة {blog?.author}</h3>
              <h3 className="text-sm">{blog?.published}</h3>
            </div>
          </div>
          <div
            className={`${fontSize} content mx-10 2xl:mx-52 px-12 my-16 py-14 space-y-7 bg-white rounded dark:bg-slate-800 dark:text-white`}
          >
            <div className="rounded h-[26.75rem] bg-slate-400 report-article-img-1"></div>
            <div className="flex">
              <div className="mx-auto flex rounded-full bg-[#FF9F4B] h-[2.563] w-[8.375rem] text-white">
                <button
                  className="flex-1 underline text-lg"
                  onClick={() => setfontSize("text-lg")}
                >
                  A
                </button>
                <button
                  className="flex-1 underline text-base"
                  onClick={() => setfontSize("text-base")}
                >
                  A
                </button>
                <button
                  className="flex-1 underline text-sm"
                  onClick={() => setfontSize("text-sm")}
                >
                  A
                </button>
              </div>
            </div>
            <p>
              إن من أهم مميزات التسويق الإلكتروني تعدد طرقه وأدواته وهو ما يجعله
              يناسب أنواع الأعمال والأعمار المختلفة، إذ يفضل تطبيق جميع الطرق
              لأنها في النهاية تصب في قناة واحدة وهي ما تسوق له الأمر الذي سيوفر
              انتشارا أو نجاحا أكبر مع الوقت. إذ أنه منروني تعدد طرقه وأدواته
              وهو ما يجعله يناسب أنواع الأعمال والأعمار المختلفة، إذ يفضل تطبيق
              جميع الطرق لأنها في النهاية تصب في قناة واحدة وهي ما تسوق له الأمر
              الذي سيوفر انتشارا أو نجاحا أكبر مع الوقت. إذ أنه منروني تعدد طرقه
              وأدواته وهو ما يجعله يناسب أنواع الأعمال والأعمار المختلفة، إذ
              يفضل تطبيق جميع الطرق لأنها في النهاية تصب في قناة واحدة وهي ما
              تسوق له الأمر الذي سيوفر انتشارا أو نجاحا أكبر مع الوقت. إذ أنه من
              روني تعدد طرقه وأدواته وهو ما يجعله يناسب أنواع الأعمال والأعمار
              المختلفة، إذ يفضل تطبيق جميع الطرق لأنها في النهاية تصب في قناة
              واحدة وهي ما تسوق له الأمر الذي سيوفر انتشارا أو نجاحا أكبر مع
              الوقت إذ أنه من.
            </p>
            <h5 className="mb-2 text-black font-bold border-r-2 border-emerald-400 pr-2">
              ما الذي سستبعه على الانترنت ؟
            </h5>
            <div className="rounded h-[26.75rem] bg-slate-400 report-article-img-1"></div>
            <p>
              إن من أهم مميزات التسويق الإلكتروني تعدد طرقه وأدواته وهو ما يجعله
              يناسب أنواع الأعمال والأعمار المختلفة، إذ يفضل تطبيق جميع الطرق
              لأنها في النهاية تصب في قناة واحدة وهي ما تسوق له الأمر الذي سيوفر
              انتشارا أو نجاحا أكبر مع الوقت. إذ أنه منروني تعدد طرقه وأدواته
              وهو ما يجعله يناسب أنواع الأعمال والأعمار المختلفة، إذ يفضل تطبيق
              جميع الطرق لأنها في النهاية تصب في قناة واحدة وهي ما تسوق له الأمر
              الذي سيوفر انتشارا أو نجاحا أكبر مع الوقت. إذ أنه منروني تعدد طرقه
              وأدواته وهو ما يجعله يناسب أنواع الأعمال والأعمار المختلفة، إذ
              يفضل تطبيق جميع الطرق لأنها في النهاية تصب في قناة واحدة وهي ما
              تسوق له الأمر الذي سيوفر انتشارا أو نجاحا أكبر مع الوقت. إذ أنه من
              روني تعدد طرقه وأدواته وهو ما يجعله يناسب أنواع الأعمال والأعمار
              المختلفة، إذ يفضل تطبيق جميع الطرق لأنها في النهاية تصب في قناة
              واحدة وهي ما تسوق له الأمر الذي سيوفر انتشارا أو نجاحا أكبر مع
              الوقت إذ أنه من.
            </p>
            <div className="flex flex-col space-y-2 sm:flex-row justify-between border-t border-neutral-200 py-5  border-b items-center">
              <div className="tags flex space-x-2 space-x-reverse text-gray-400">
                <div className="rounded-full bg-slate-100 px-3 py-1 w-fit">
                  # تسويق
                </div>
                <div className="rounded-full bg-slate-100 px-3 py-1 w-fit">
                  # تسويق
                </div>
                <div className="rounded-full bg-slate-100 px-3 py-1 w-fit">
                  # تسويق
                </div>
              </div>
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
                  <AiOutlineLinkedin />
                </a>
              </div>
            </div>
            {/* comments section */}
            <section className="space-y-5">
              <h5 className="mb-2 text-black font-bold border-r-2 border-emerald-400 pr-2">
                التعليقات (3)
              </h5>
              <div className="comment border-b pb-5">
                <div className="flex justify-between mb-2">
                  <h5 className="text-black">أبو جود</h5>
                  <div className="flex space-x-1 items-center space-x-reverse">
                    <BiTimeFive />
                    <h5>منذ يوم</h5>
                  </div>
                </div>
                <p className="text-neutral-700">
                  إن من أهم مميزات التسويق الإلكتروني تعدد طرقه وأدواته وهو ما
                  روني تعدد طرقه وأدواته وهو ما يجعله يناسب أنواع الأعمال
                  والأعمار المختلفة، إذ يفضل تطبيق جميع الطرق لأنها في النهاية
                  تصب في قناة واحدة وهي ما تسوق له الأمر الذي سيوفر انتشارا أو
                  نجاحا أكبر مع الوقت إذ أنه من.
                </p>
              </div>
              <div className="comment border-b pb-5">
                <div className="flex justify-between mb-2">
                  <h5 className="text-black">أبو جود</h5>
                  <div className="flex space-x-1 items-center space-x-reverse">
                    <BiTimeFive />
                    <h5>منذ يوم</h5>
                  </div>
                </div>
                <p className="text-neutral-700">
                  إن من أهم مميزات التسويق الإلكتروني تعدد طرقه وأدواته وهو ما
                  روني تعدد طرقه وأدواته وهو ما يجعله يناسب أنواع الأعمال
                  والأعمار المختلفة، إذ يفضل تطبيق جميع الطرق لأنها في النهاية
                  تصب في قناة واحدة وهي ما تسوق له الأمر الذي سيوفر انتشارا أو
                  نجاحا أكبر مع الوقت إذ أنه من.
                </p>
              </div>
              <h5 className="mb-2 text-black font-bold border-r-2 border-emerald-400 pr-2">
                كن اول من يعلق
              </h5>
              <form
                noValidate
                onSubmit={() => {}}
                className="grid grid-cols-2 gap-4"
              >
                <div className="flex flex-col col-span-2 space-y-2.5">
                  <label>اكتب تعليقك</label>
                  <textarea
                    className="border rounded h-28 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    placeholder="اكتب تعليقك هنا"
                    // value={body}
                    // onChange={(e) => setBody(e.target.value)}
                  ></textarea>
                </div>
                <div className="flex flex-col space-y-2.5">
                  <label>الاسم</label>
                  <input
                    className="border rounded p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="الرجاء كتابة اسمك هنا"
                    type="text"
                    required
                    value={""}
                    // onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-2.5">
                  <label>الايميل</label>
                  <input
                    className="border rounded p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="الرجاء كتابة ايميلك هنا"
                    type="text"
                    required
                    value={""}
                    // onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <button className="bg-[#45beae] hover:bg-[#4cccbb] text-white w-60 font-bold py-2 px-4 rounded transition-all">
                  أضف تعليقك
                </button>
              </form>
            </section>
          </div>
        </section>
      )}
    </>
  );
};

export default ReportDetails;

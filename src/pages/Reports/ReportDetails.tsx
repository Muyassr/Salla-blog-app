import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Blog } from "../../models/models";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

interface probs {
  blogId: number;
}

const baseURL = "https://62ace799402135c7acba8b3b.mockapi.io/";

const ReportDetails = ({ blogId }: probs) => {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog>();
  const [fontSize, setfontSize] = useState<string>("text-base");

  useEffect(() => {
    //get blog details
    axios.get(`${baseURL}blogs/${id}`).then((response) => {
      setBlog(response.data);
    });
  }, []);

  return (
    <>
      <section id="report-details" className="">
        <div className="report-header-bg text-right text-white py-14 px-52 space-y-6">
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
          className={`${fontSize} content mx-52 px-12 my-16 py-14 space-y-7 bg-white`}
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
          <p className={``}>
            إن من أهم مميزات التسويق الإلكتروني تعدد طرقه وأدواته وهو ما يجعله
            يناسب أنواع الأعمال والأعمار المختلفة، إذ يفضل تطبيق جميع الطرق
            لأنها في النهاية تصب في قناة واحدة وهي ما تسوق له الأمر الذي سيوفر
            انتشارا أو نجاحا أكبر مع الوقت. إذ أنه منروني تعدد طرقه وأدواته وهو
            ما يجعله يناسب أنواع الأعمال والأعمار المختلفة، إذ يفضل تطبيق جميع
            الطرق لأنها في النهاية تصب في قناة واحدة وهي ما تسوق له الأمر الذي
            سيوفر انتشارا أو نجاحا أكبر مع الوقت. إذ أنه منروني تعدد طرقه
            وأدواته وهو ما يجعله يناسب أنواع الأعمال والأعمار المختلفة، إذ يفضل
            تطبيق جميع الطرق لأنها في النهاية تصب في قناة واحدة وهي ما تسوق له
            الأمر الذي سيوفر انتشارا أو نجاحا أكبر مع الوقت. إذ أنه من روني تعدد
            طرقه وأدواته وهو ما يجعله يناسب أنواع الأعمال والأعمار المختلفة، إذ
            يفضل تطبيق جميع الطرق لأنها في النهاية تصب في قناة واحدة وهي ما تسوق
            له الأمر الذي سيوفر انتشارا أو نجاحا أكبر مع الوقت إذ أنه من.
          </p>
          <h5 className="mb-2 text-black font-bold border-r-2 border-emerald-400 pr-2">
            ما الذي سستبعه على الانترنت ؟
          </h5>
          <div className="rounded h-[26.75rem] bg-slate-400 report-article-img-1"></div>
          <p className={``}>
            إن من أهم مميزات التسويق الإلكتروني تعدد طرقه وأدواته وهو ما يجعله
            يناسب أنواع الأعمال والأعمار المختلفة، إذ يفضل تطبيق جميع الطرق
            لأنها في النهاية تصب في قناة واحدة وهي ما تسوق له الأمر الذي سيوفر
            انتشارا أو نجاحا أكبر مع الوقت. إذ أنه منروني تعدد طرقه وأدواته وهو
            ما يجعله يناسب أنواع الأعمال والأعمار المختلفة، إذ يفضل تطبيق جميع
            الطرق لأنها في النهاية تصب في قناة واحدة وهي ما تسوق له الأمر الذي
            سيوفر انتشارا أو نجاحا أكبر مع الوقت. إذ أنه منروني تعدد طرقه
            وأدواته وهو ما يجعله يناسب أنواع الأعمال والأعمار المختلفة، إذ يفضل
            تطبيق جميع الطرق لأنها في النهاية تصب في قناة واحدة وهي ما تسوق له
            الأمر الذي سيوفر انتشارا أو نجاحا أكبر مع الوقت. إذ أنه من روني تعدد
            طرقه وأدواته وهو ما يجعله يناسب أنواع الأعمال والأعمار المختلفة، إذ
            يفضل تطبيق جميع الطرق لأنها في النهاية تصب في قناة واحدة وهي ما تسوق
            له الأمر الذي سيوفر انتشارا أو نجاحا أكبر مع الوقت إذ أنه من.
          </p>
          <div className="flex justify-between border-t-2 border-neutral-200 py-5  border-b-2">
            <div className="tags flex space-x-2 space-x-reverse text-gray-400">
              <div className="rounded-full bg-slate-100 px-3 py-1 h-fit">
                # تسويق
              </div>
              <div className="rounded-full bg-slate-100 px-3 py-1 h-fit">
                # تسويق
              </div>
              <div className="rounded-full bg-slate-100 px-3 py-1 h-fit">
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
                <AiOutlineInstagram />
              </a>
              <a
                href="#"
                className="rounded-full  flex justify-center items-center w-9 h-9 text-lg bg-slate-100 border border-stone-200 hover:bg-slate-200 transition-all"
              >
                <HiOutlineMail />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportDetails;

import backgroundImage from "../../assets/diverse-people-working-office1.png";
import { useState, useEffect } from "react";

interface props {}

const Hero: React.FC<props> = () => {
  const imgUrl = "/src/assets/diverse-people-working-office1.png";
  const [blog, setBlog] = useState([]);
  return (
    <>
      
      <section
        className={`h-[32.5rem] p-5 px-52 flex bg-cover bg-no-repeat bg-black bg-opacity-50 bg-blend-overlay bg-[url('${imgUrl}')]`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container flex">
          <div className="text-right border-r-4 px-5 border-emerald-400 text-white mt-auto">
            <h1 className="font-bold text-5xl">مركز المدونة</h1>
            <p className="my-4 text-2xl">
              مركــز للتعليـــم ونشــر المعرفة عبر المقالات والدونات المتخصصة
              بموضوعات التجارة الالكترونى والاقتصاد والتقنية , ومايخص حياتنا
              كتجار , كل ماتريده عن التجارة الالكترونية والاقتصاد
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

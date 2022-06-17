import Navbar from "../../components/Navbar";
import styles from "./styles.scss";
import backgroundImage from "../../assets/diverse-people-working-office1.png";
import MostReadCard from "./MostReadCard";
import { IoIosArrowBack } from "react-icons/io";

const Hero = () => {
  const imgUrl = "/src/assets/diverse-people-working-office1.png";
  return (
    <>
      <Navbar />
      <section
        className={`h-[32.5rem] p-5 px-52 flex bg-cover bg-no-repeat bg-black bg-opacity-50 bg-blend-overlay bg-[url('${imgUrl}')]`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container flex justify-end">
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
      <section id="mostRead">
        <div className="flex p-5 px-52 justify-between align-baseline">
          <h3 className="text-2xl">الأكثر قراءة</h3>
          <div className="flex items-center">
            <h4>عرض المزيد</h4>
            <IoIosArrowBack className="text-emerald-400" />
          </div>
        </div>
        {/* <BlogList blogs={blogs} />  */}
        <MostReadCard />
      </section>
    </>
  );
};

export default Hero;

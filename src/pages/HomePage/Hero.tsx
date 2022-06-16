import Navbar from "../../components/Navbar";
import backgroundImage from "../../assets/diverse-people-working-office1.png";
const Hero = () => {
  const imgUrl = "src/assets/diverse-people-working-office1.png";
  return (
    <>
      <Navbar />
      <section
        className={`flex p-20 bg-no-repeat min-h-screen bg-black bg-opacity-50 bg-blend-overlay bg-[url('${imgUrl}')]`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container flex justify-end">
          <div className="flex flex-col justify-end text-right border-r-4 px-5 border-emerald-400 text-white mt-auto">
            <h1 className="font-bold text-5xl space-y-4">مركز المدونة</h1>
            <p>
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

import { useState, useEffect } from "react";

interface props {}

const AdBanner: React.FC<props> = () => {
  const [blog, setblog] = useState({
    category: "category 1",
    title: "ما هو مستقبل التجارة الإلكترونية",
    content:
      "من المتوقع أن تزيد المبيعات من 1.3 تريليون في عام 2014 إلى 4.5 تريليون في عام 2021.",
    author: "Hannah McDermott",
    published: 1655738493,
    img: "img-ideas-1",
    blogType: "blogType 1",
    id: "1",
  });
  return (
    <>
      <div className="h-[22.375rem] text-right rounded adBanner-image text-white">
        <div className="content w-2/4 pr-28 pt-20">
          <h5 className="mb-2 text-sm text--neutral-800 border-r-2 border-emerald-400 pr-2">
            أفكار بزنس
          </h5>
          <h5 className="mb-2 text-4xl">{blog.title}</h5>
          <p className="mb-3 text-lg">{blog.content}</p>
          <h3 className="text-sm">بواسطة {blog.author}</h3>
          <a href="#" className="block absolute inset-0"></a>
        </div>
      </div>
    </>
  );
};

export default AdBanner;

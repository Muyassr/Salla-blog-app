interface probs {}

const IdeasBlogs: React.FC<probs> = () => {
  return (
    <>
      <div className="grid grid-rows-3 grid-flow-col gap-4 bg-red-200">
        <div className="row-span-3 col-span-6 bg-green-200">01</div>
        <div className="col-span-6 bg-slate-300">02</div>
        <div className=" col-span-6 bg-yellow-200">03</div>
        <div className="col-span-6 bg-blue-100">04</div>
      </div>
    </>
  );
};

export default IdeasBlogs;

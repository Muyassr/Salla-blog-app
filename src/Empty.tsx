import { BsFillInboxFill } from "react-icons/bs";

interface props {}

const Empty: React.FC<props> = () => {
  return (
    <>
      <div className="flex flex-col items-center m-4">
        <div className="text-7xl">
          <BsFillInboxFill />
        </div>
        <h1>List is Empty</h1>
      </div>
    </>
  );
};

export default Empty;

import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="left">
        <h1>Сладкий сундук</h1>
      </div>
      <div className="right flex items-center max-[664px]:gap-[30px] gap-[70px]">
        <div className="flex items-center gap-3 max-[600px]:hidden">
          <FaLocationDot size={17} />
          <h1 className="font-normal text-[12px] leading-[150%]">
            г. Санкт Петербург, <br /> ул. Куйбышева 31
          </h1>
        </div>
        <div className="flex items-center gap-3 max-[600px]:hidden">
          <IoCall />
          <h1 className="font-bold text-[20px] max-[664px]:text-[16px] leading-[100%]">
            8 (812) 844-95-49 <br />
            <span className="font-normal text-[13px]">
              Ежедневно с 9:00 до 20:00
            </span>
          </h1>
        </div>
        <button onClick={toggleMenu} className="hidden max-[600px]:block">
          <IoMenu size={24} />
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[90%] max-w-sm bg-[#0a1022]  text-white  shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-8 right-10 text-white"
          onClick={() => setIsOpen(false)}
        >
          <IoMdClose className="text-2xl" />
        </button>
        <div className="flex flex-col items-center gap-10 justify-center h-full">
          <div className="flex items-center gap-3 flex-col text-center">
            <FaLocationDot size={17} />
            <h1 className="font-normal text-[16px] leading-[150%]">
              г. Санкт Петербург, <br /> ул. Куйбышева 31
            </h1>
          </div>
          <div className="flex items-center gap-3 flex-col text-center ">
            <IoCall />
            <h1 className="font-bold text-[20px]  leading-[100%]">
              8 (812) 844-95-49 <br />
              <span className="font-normal text-[13px]">
                Ежедневно с 9:00 до 20:00
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

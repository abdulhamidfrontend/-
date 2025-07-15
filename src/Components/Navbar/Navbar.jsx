import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="left">
        <h1>Сладкий сундук</h1>
      </div>
      <div className="right flex items-center gap-[70px]">
        <div className="flex items-center gap-3">
          <FaLocationDot size={17} />
          <h1 className="font-normal text-[12px] leading-[150%]">
            г. Санкт Петербург, <br /> ул. Куйбышева 31
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <IoCall />
          <h1 className="font-bold text-[20px] leading-[100%]">
            8 (812) 844-95-49 <br />
            <span className="font-normal text-[13px]">
              Ежедневно с 9:00 до 20:00
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

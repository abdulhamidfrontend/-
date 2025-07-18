import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white rounded-[8px] py-15">
      <div className="title text-center max-[850px]:max-w-[90%] max-[850px]:m-auto">
        <h1 className="font-bold max-[1050px]:text-2xl max-[450px]:text-[18px] max-[400px]:font-bold!  text-[36px] leading-[133%] text-[#2e363e]">
          Чтобы сделать заказ, укажите ваш телефон
        </h1>
        <p className="font-normal text-[21px] max-[450px]:text-[14px] max-[400px]:text-xs max-[1050px]:text-[16px] leading-[143%] tracking-[-0.01em] text-[#2e363e]">
          Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания
        </p>
      </div>
      <div className="body  flex items-center gap-5 max-[1030px]:flex-col justify-center pt-9">
        <form
          action=""
          className="flex items-center max-[550px]:w-[90%]  max-[550px]:m-auto gap-2 bg-[#f2f6fa] max-[400px]:py-[15px] w-[380px] py-7.5 px-6.5 rounded-[8px]"
        >
          <FaPhoneAlt className="font-normal text-[15px] leading-[160%] text-[#7e868e]" />
          <input
            className="font-normal text-[15px] max-[400px]:text-xs! w-full focus:outline-none leading-[160%] text-[#7e868e]"
            type="text"
            placeholder="Номер телефона"
          />
        </form>
        <button className="btn py-[29px] max-[550px]:w-[90%]  max-[400px]:py-[15px]  max-[550px]:m-auto max-[530px]:text-[12px]! max-[515px]:px-[50px] px-[125px] font-medium text-[18px] leading-[152%] text-center text-[#2e363e]">
          Сделать заказ
        </button>
      </div>

      <div className=" flex items-start pt-10 gap-2 max-[850px]:max-w-[90%] max-[850px]:m-auto  justify-center">
        <input type="checkbox" className="cursor-pointer" />
        <p className="font-normal text-[11px]  text-[#7e868e]">
          Нажамая на кнопку, вы соглашаетесь с {"  "}
          <span className="underline">
            условиями обработки персональных данных
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;

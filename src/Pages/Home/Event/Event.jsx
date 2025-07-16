import { GoDotFill } from "react-icons/go";
import EventImg from "../../../assets/event.png";

const Event = () => {
  return (
    <div className="flex max-[1024px]:flex-col  items-center justify-between gap-10 py-20 px-5 lg:px-0">
      <div className="left max-w-[580px] max-[1024px]:justify-center max-[1024px]:items-center max-[1024px]:text-center flex flex-col">
        <h3 className="bg-[#f2f6fa] py-2.5 px-4.5 w-fit rounded-[5px] font-normal text-[11px] leading-[150%] tracking-widest uppercase text-[#2e363e] ">
          Кто будет готовить?
        </h3>

        <h1 className="font-medium text-[32px] max-[400px]:text-[30px] sm:text-[40px] lg:text-[48px] leading-[125%] tracking-[-0.02em] text-[#2e363e]  mt-4">
          Лично приготовлю и всё красиво упакую для вашего события
        </h1>

        <div className="my-12 space-y-6">
          {[
            "Проконсультирую по выбору капкейков и придумаю нестандартную идею",
            "Приготовлю капкейки для вашего события, которые обязательно всем понравятся",
            "Аккуратно и красиво всё упакую, если вы хотите сделать приятный подарок",
          ].map((text, index) => (
            <div key={index} className="max-w-[440px] flex items-start gap-3 ">
              <GoDotFill
                size={24}
                className="text-blue-600 mt-1 max-[1024px]:hidden"
              />
              <p className="font-normal text-[16px] sm:text-[18px] leading-[150%] text-[#2e363e]">
                {text}
              </p>
            </div>
          ))}
        </div>

        <button className="btn max-[400px]:text-[14px]! w-fit py-4 px-8 text-[16px] sm:text-[18px] ">
          Задать вопрос Юлии
        </button>
      </div>

      <div className="right">
        <img
          className="w-full max-w-[580px] object-cover"
          src={EventImg}
          alt="event img"
        />
      </div>
    </div>
  );
};

export default Event;

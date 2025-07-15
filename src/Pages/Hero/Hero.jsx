const Hero = () => {
  return (
    <div className="text-white flex flex-col gap-6 max-[1000px]:justify-center max-[1000px]:items-center max-[1000px]:text-center ">
      <h3 className="font-normal text-[11px] leading-[150%] tracking-widest uppercase text-[#2e363e] rounded-[5px] py-2.5 px-4.5 bg-[#f2f6fa] w-fit">
        вкуснейшие
      </h3>
      <h1 className="max-w-[580px] max-[800px]:max-w-[80%] max-[400px]:max-w-full  max-[800px]:text-[36px] max-[600px]:text-2xl font-bold text-[48px] leading-[125%] tracking-[-0.02em]">
        Пирожные и капкейки от 150 ₽/шт. с доставкой по Санкт Петербургу
      </h1>
      <h3 className="max-w-[500px] max-[800px]:max-w-[80%] max-[400px]:text-[14px] max-[800px]:text-[18px] max-[600px]:text-[16px]  font-normal text-[24px] leading-[143%]">
        Приготовим за 3 часа в день заказа. Доставка на авто в холодильнике.
      </h3>
      <div className="flex items-center gap-5">
        <button className="btn py-5 px-10 max-[600px]:py-3 max-[600px]:px-7 ">
          Перейти в каталог
        </button>
        <h3 className="font-normal text-[15px] max-[1000px]:bg-black max-[600px]:hidden max-[1000px]:rounded-[8px] max-[1000px]:px-10 max-[1000px]:py-2 leading-[160%]">
          9 различных <br /> видов на выбор
        </h3>
      </div>
    </div>
  );
};

export default Hero;

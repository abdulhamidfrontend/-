const Order = () => {
  return (
    <div className="flex items-center justify-end max-[1100px]:justify-center max-[1100px]:text-center">
      <div className="text-white flex flex-col max-[400px]:gap-5 max-[1100px]:items-center">
        <h3 className=" bg-white w-fit font-normal  text-[11px] leading-[150%] tracking-widest uppercase text-[#2e363e] rounded-[5px] py-2.5 px-4.5">
          Не нашли то что нужно?
        </h3>
        <h1 className="max-w-[481px] max-[450px]:max-w-full max-[400px]:text-2xl max-[575px]:text-[32px] font-medium text-[48px] leading-[125%] tracking-[-0.02em]">
          Приготовим заказ любой сложности по фото или эскизу
        </h1>
        <p className="max-w-[430px] max-[450px]:max-w-full font-normal max-[400px]:text-[14px] max-[575px]:text-[16px] text-[21px] leading-[143%] tracking-[-0.01em]">
          Загрузите фотографию или эскиз капкейков и мы рассчитаем стоимость за
          30 минут
        </p>
        <button className="btn py-8 max-[575px]:px-7 max-[400px]:text-[14px]! max-[575px]:py-5 px-12 w-fit">
          Загрузить фотографию
        </button>
      </div>
    </div>
  );
};

export default Order;

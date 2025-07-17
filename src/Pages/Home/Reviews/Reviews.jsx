import { useRef } from "react";
import { Carousel } from "antd";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import ReviewAva1 from "../../../assets/reviewava1.png";
import ReviewAva2 from "../../../assets/reviewava2.png";

const contentStyle = {
  margin: 0,
  height: "615px",
  color: "black",
  background: "white",
  borderRadius: "10px",
};

const reviews = [
  {
    title: "«Результат дико порадовал, друзья были в восторге»",
    text: `«Заказала капкейки, как подарок на новый год. Делать заказ было легко и приятно, ну а результат дико порадовал, друзья были в восторге. И оформление, и на вкус капкейки были просто замечательные. Обязательно буду заказывать еще Уже строю планы, чтобы попробовать все начинки. Они восхитительны! Даже кушать было жалко, такая красота!»`,
    author: "Ирина Ларионова",
    city: "Санкт-Петербург",
    image: ReviewAva1,
  },
  {
    title: "«Лучшую фразу из отзыва напишите в заголовке»",
    text: `«Вставьте отзыв целиком или часть отзыва клиента. Никогда не выдумывайте отзывы самостоятельно. Фильшивые отзывы всегда видно. Будьте честны. Опишите конечный результат, который получил человек после работы с вами. Что конеретно ему это дало. Можно описывать результат в цифрах, чтобы была конкретика»`,
    author: "Елена Демидова",
    city: "Санкт-Петербург",
    image: ReviewAva2,
  },
  {
    title: "«Спасибо за прекрасные капкейки, все на высоте»",
    text: `«Вставьте отзыв целиком или часть отзыва клиента. Никогда не выдумывайте отзывы самостоятельно. Фильшивые отзывы всегда видно. Будьте честны. Опишите конечный результат, который получил человек после работы с вами. Что конеретно ему это дало. Можно описывать результат в цифрах, чтобы была конкретика»`,
    author: "Иван Демидов",
    city: "Краснодар",
    image: ReviewAva2,
  },
];

const Reviews = () => {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleNext = () => {
    carouselRef.current.next();
  };

  return (
    <div className="flex flex-col font-montserrat items-center px-4">
      <Carousel
        ref={carouselRef}
        arrows={false}
        infinite
        className="w-full max-[1250px]:max-w-[900px] max-[690px]:max-w-[450px] max-[500px]:max-w-[300px] max-[1000px]:max-w-[650px] max-w-[1180px]"
      >
        {reviews.map((review, index) => (
          <div key={index}>
            <div style={contentStyle}>
              <div className="py-[80px] max-[500px]:py-5 font-montserrat max-[1000px]:flex-col max-[1000px]:py-10 max-[1000px]:text-center max-[1000px]:gap-5 max-[1250px]:py-30 max-[1250px]:px-[100px] max-[690px]:px-10 max-[500px]: px-[143px] flex  items-center justify-between  relative ">
                <BiSolidQuoteAltLeft
                  size={40}
                  className="text-violet-500 max-[1000px]:hidden  absolute top-20 "
                />

                <div className="left max-w-[430px] max-[690px]:max-w-full  max-[1250px]:max-w-[350px] ">
                  <h1 className="font-medium  text-[30px] max-[1250px]:text-[20px] leading-[143%] text-[#2e363e] mb-4">
                    {review.title}
                  </h1>
                  <p className="font-normal max-[1250px]:text-xs text-[15px]  leading-[170%] text-[#2e363e] mb-3">
                    {review.text}
                  </p>
                  <a
                    href="#"
                    className="font-normal  text-[14px] leading-[150%] text-[#4a94ff]"
                  >
                    Читать отзыв полностью
                  </a>
                </div>
                <div className="right flex flex-col items-center">
                  <img
                    className="w-[380px] max-[500px]:w-[150px] max-[1250px]:w-[250px]  mb-3 rounded-md"
                    src={review.image}
                    alt={review.author}
                  />
                  <h3 className="text-[16px] font-semibold">{review.author}</h3>
                  <p className="text-[14px] text-gray-600">{review.city}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="flex gap-6 mt-6">
        <button
          onClick={handlePrev}
          className="w-10 h-10 flex items-center justify-center bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 flex items-center justify-center bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Reviews;

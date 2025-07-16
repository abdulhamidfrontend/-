import { useEffect, useState } from "react";
import { Pagination } from "antd";
import "antd/dist/reset.css"; // Ant Design CSS
import Card1img from "../../../assets/card1.png";
import Card2img from "../../../assets/card2.png";
import Card3img from "../../../assets/card3.png";
import Card4img from "../../../assets/card4.png";
import Card5img from "../../../assets/card5.png";
import Card6img from "../../../assets/card6.png";
import Card7img from "../../../assets/card7.png";
import Card8img from "../../../assets/card8.png";
import Card9img from "../../../assets/card9.png";

const allCards = [
  {
    img: Card1img,
    name: "Кремовый замок",
    description: "Нежный крем любого цвета на выбор, вафельная основа",
    count: "150 ₽/шт.",
  },
  {
    img: Card2img,
    name: "Кремовый замок",
    description: "Нежный крем любого цвета на выбор, вафельная основа",
    count: "150 ₽/шт.",
  },
  {
    img: Card3img,
    name: "Кремовый замок",
    description: "Нежный крем любого цвета на выбор, вафельная основа",
    count: "150 ₽/шт.",
  },
  {
    img: Card4img,
    name: "Кремовый замок",
    description: "Нежный крем любого цвета на выбор, вафельная основа",
    count: "150 ₽/шт.",
  },
  {
    img: Card5img,
    name: "Кремовый замок",
    description: "Нежный крем любого цвета на выбор, вафельная основа",
    count: "150 ₽/шт.",
  },
  {
    img: Card6img,
    name: "Кремовый замок",
    description: "Нежный крем любого цвета на выбор, вафельная основа",
    count: "150 ₽/шт.",
  },
  {
    img: Card7img,
    name: "Кремовый замок",
    description: "Нежный крем любого цвета на выбор, вафельная основа",
    count: "150 ₽/шт.",
  },
  {
    img: Card8img,
    name: "Кремовый замок",
    description: "Нежный крем любого цвета на выбор, вафельная основа",
    count: "150 ₽/шт.",
  },
  {
    img: Card9img,
    name: "Кремовый замок",
    description: "Нежный крем любого цвета на выбор, вафельная основа",
    count: "150 ₽/шт.",
  },
];

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 980);

  const cardsPerPage = 3;
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const paginatedCards = isMobile
    ? allCards.slice(startIndex, endIndex)
    : allCards;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 980);
      setCurrentPage(1); // sahifani boshqatdan boshlash
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="title">
        <h1 className="font-medium max-[400px]:text-[22px] max-[780px]:text-3xl text-[48px] leading-[125%] tracking-[-0.02em] text-center text-[#2e363e]">
          Для любых событий и дорогих вам людей
        </h1>
      </div>

      <div className="cards w-fit m-auto max-[1400px]:grid-cols-2 max-[980px]:grid-cols-1 py-20 grid grid-cols-3 gap-5">
        {paginatedCards.map((card, i) => (
          <div
            key={i}
            className="card w-[380px] shadow rounded-xl max-[520px]:w-[80%] max-[520px]:m-auto hover:scale-102 hover:shadow-xl transition duration-300"
          >
            <img src={card.img} alt="card image" />
            <div className="px-10 max-[400px]:py-5 max-[485px]:py-8 max-[485px]:px-6 py-12">
              <h1 className="font-bold max-[450px]:text-[18px] text-[24px] leading-[143%] text-[#2e363e]">
                {card.name}
              </h1>
              <p className="font-normal text-[16px] max-[450px]:text-[14px] max-[450px]:mb-2 mt-3 mb-6 leading-[150%] text-[#2e363e]">
                {card.description}
              </p>
              <p className="font-medium max-[400px]:text-[18px] text-[24px] mb-4 leading-[150%] text-[#434b53]">
                {card.count}
              </p>
              <button className="btn py-5 max-[400px]:text-[14px]! max-[480px]:py-3 max-[480px]:px-7 px-10 cursor-pointer">
                Заказать
              </button>
            </div>
          </div>
        ))}
      </div>

      {isMobile && (
        <div className="flex justify-center pb-10">
          <Pagination
            current={currentPage}
            pageSize={cardsPerPage}
            total={allCards.length}
            onChange={(page) => setCurrentPage(page)}
          />
        </div>
      )}
    </div>
  );
};

export default Products;

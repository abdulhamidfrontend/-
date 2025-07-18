import Activity1img from "../../../assets/activity1.png";
import Activity2img from "../../../assets/activity2.png";
import Activity3img from "../../../assets/activity3.png";
import Activity4img from "../../../assets/activity4.png";
import Activity5img from "../../../assets/activity5.png";
import Activity6img from "../../../assets/activity6.png";
import Activity7img from "../../../assets/activity7.png";
import Activity8img from "../../../assets/activity8.png";
import Activity9img from "../../../assets/activity9.png";

const AcitivyImages = [
  Activity1img,
  Activity2img,
  Activity3img,
  Activity4img,
  Activity5img,
  Activity6img,
  Activity7img,
  Activity8img,
  Activity9img,
];

const Activity = () => {
  return (
    <div>
      <div className="title max-[450px]:w-[80%] max-[450px]:m-auto text-center">
        <h1 className="font-medium max-[1030px]:text-3xl max-[500px]:text-[22px] max-[500px]:font-semibold! max-[570px]:text-[20px] max-[720px]:text-2xl text-[48px] leading-[125%] tracking-[-0.02em] text-center text-[#2e363e]">
          Сделали более 3.000 заказов за 2 года
        </h1>
        <p className="font-normal  max-[1030px]:text-[18px]  max-[720px]:text-[14px] text-[24px] leading-[143%] text-center text-[#2e363e]">
          Посмотрите фото реальных заказов из нашего instagram
        </p>
      </div>
      <div className="body py-20">
        <div className="grid grid-cols-3 max-[800px]:grid-cols-2 max-[570px]:grid-cols-1 max-[570px]:w-[80%] w-fit m-auto gap-2.5">
          {AcitivyImages.map((img, index) => (
            <div key={index}>
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activity;

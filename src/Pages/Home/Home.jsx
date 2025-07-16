import Navbar from "../../Components/Navbar/Navbar";
import HeroBg from "../../assets/herobg.png";
import Hero from "./Hero/Hero";
import Order from "./Order/Order";
import Products from "./Products/Products";
import SmokeTop from "../../assets/smoketop.png";
import SmokeBottom from "../../assets/smokebottom.png";

import phone from "../../assets/phone.png";

const Home = () => {
  return (
    <div className="w-full m-auto">
      <div className="w-full bg-custom-gradient ">
        <div className="w-[80%] m-auto text-white">
          <div className="py-7">
            <Navbar />
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${HeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div data-aos="fade-up" data-aos-duration="3000">
          <div className="w-[80%] m-auto py-[130px] max-[1000px]:py-[50px]">
            <Hero />
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="3000">
        <div className="py-20 w-[80%] m-auto">
          <Products />
        </div>
      </div>

      <div className="bg-[#081130] h-[1152px]    relative overflow-hidden">
        <div
          style={{
            backgroundImage: `url(${SmokeTop})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            height: "330px",
          }}
        ></div>
        <img
          src={phone}
          alt="phone"
          className="absolute max-[1100px]:hidden max-[1200px]:w-[600px] left-0 bottom-0 w-[800px] "
        />
        <div className="relative py-10 w-[80%] m-auto z-10">
          <Order />
        </div>
        <div
          style={{
            backgroundImage: `url(${SmokeBottom})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            height: "330px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Home;

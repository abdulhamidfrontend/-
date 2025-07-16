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
    <div className="w-full m-auto overflow-hidden">
      {/* Navbar */}
      <div className="w-full bg-custom-gradient">
        <div className="w-[80%] m-auto text-white py-7">
          <Navbar />
        </div>
      </div>

      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${HeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className="w-[80%] m-auto py-[130px] max-[1000px]:py-[50px]">
          <Hero />
        </div>
      </div>

      {/* Products Section */}

      <div className="py-20 w-[80%] m-auto">
        <Products />
      </div>

      {/* Order Section */}
      <div className="bg-[#081130] relative z-0 overflow-hidden">
        {/* Smoke Top */}
        <div
          style={{
            backgroundImage: `url(${SmokeTop})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            height: "330px",
          }}
        ></div>

        {/* Phone Image */}
        <img
          src={phone}
          alt="phone"
          className="absolute max-[1100px]:hidden max-[1200px]:w-[600px] w-[800px] left-0 -bottom-10 z-0 pointer-events-none"
        />

        {/* Order Content */}
        <div className="relative py-10 w-[80%] m-auto z-10">
          <Order />
        </div>

        {/* Smoke Bottom */}
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

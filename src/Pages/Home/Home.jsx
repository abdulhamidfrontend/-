import Navbar from "../../Components/Navbar/Navbar";
import HeroBg from "../../assets/herobg.png";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div className="w-full m-auto">
      <div className="w-full bg-custom-gradient ">
        <div className="w-[80%] m-auto text-white">
          <div className="py-7 ">
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
        <div className="w-[80%] m-auto py-[130px] max-[1000px]:py-[50px]">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS uslublari

import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // AOS init
    AOS.init({
      duration: 800, // animatsiya davomiyligi (ms)
      once: true, // faqat bir marta animatsiya bo‘lsin
    });

    // Loader timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import Header from "../components/PageComponents/LandingPage/Header";
import Hero from "../components/PageComponents/LandingPage/Hero/Hero";

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(0);
  const [heroHeight, setHeroHeight] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY <= heroHeight - 190) {
        setScrolled(0);
        return false;
      }
      setScrolled(1);
    });
  }, [heroHeight]);

  const getHeroHeight = (el) => {
    setHeroHeight(el.current.clientHeight);
  };

  return (
    <main role="main">
      <Header scrolled={scrolled} />
      <Hero heroHeightHandler={getHeroHeight} />
      <div style={{ height: "100vh" }}></div>
    </main>
  );
};

export default LandingPage;

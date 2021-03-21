import { useState, useEffect } from "react";
import Header from "../components/PageComponents/LandingPage/Header";
import Hero from "../components/PageComponents/LandingPage/Hero/Hero";
import ImageTextSection from "../components/PageComponents/LandingPage/ImageTextSection/ImageTextSection";
import starImage from "../assets/images/landingpage/starfamily.jpg";
import greysAnatomyImage from "../assets/images/landingpage/greysanatomy.png";
import rayaImage from "../assets/images/landingpage/raya.jpg";
import ButtonLink from "../components/Button/ButtonLink";

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
      <ImageTextSection
        title="Introducing STAR"
        image={starImage}
        alt="STAR Disney"
      >
        Star on Disney+ brings you more. A brand-new world of TV series, movies
        and new originals, with thousands of hours of bigger, bolder and more
        exciting stories than ever before. Enjoy Star as part of your Disney+
        subscription.
      </ImageTextSection>
      <ImageTextSection
        title="Watch the way you want"
        image={greysAnatomyImage}
        alt="Greys Anatomy"
        imageRight
      >
        <ul>
          <li>
            Host virtual movie nights with GroupWatch. Pause, rewind and react
            with up to six personal friends. To invite or be invited to join
            GroupWatch, subscription is required.
          </li>
          <li>Download any movie or series and watch on-the-go</li>
          <li>Keep your family safe with easy parental controls</li>
          <li>
            An ever-growing range of titles in stunning 4K UHD and Dolby Atmos
            sound on compatible devices
          </li>
          <li>Stream on up to four devices at the same time</li>
        </ul>
      </ImageTextSection>
      <ImageTextSection
        title="Now streaming with"
        span="Premier Access"
        image={rayaImage}
        alt="Raya and the last dragon"
      >
        See Raya and the Last Dragon before it's available to all Disney+
        subscribers on 4 June. Watch as many times as you like with Premier
        Access for £19.99 and your Disney+ subscription. Learn more.
        <ButtonLink large block gradient>
          Get premier access now
        </ButtonLink>
      </ImageTextSection>
    </main>
  );
};

export default LandingPage;

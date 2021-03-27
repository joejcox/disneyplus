import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/PageComponents/LandingPage/Header";
import Hero from "../components/PageComponents/LandingPage/Hero/Hero";
import ImageTextSection from "../components/PageComponents/LandingPage/ImageTextSection/ImageTextSection";
import starImage from "../assets/images/landingpage/starfamily.jpg";
import greysAnatomyImage from "../assets/images/landingpage/greysanatomy.png";
import rayaImage from "../assets/images/landingpage/raya.jpg";
import ButtonLink from "../components/Button/ButtonLink";
import GridSection from "../components/PageComponents/LandingPage/GridSection/GridSection";
import SignUpSection from "../components/PageComponents/LandingPage/SignUpSection/SignUpSection";
import Footer from "../components/Footer/Footer";
import { data as images } from "../components/PageComponents/LandingPage/ExclusiveImages";
import { data as entertainmentImages } from "../components/PageComponents/LandingPage/EntertainmentImages";

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(0);
  const [heroHeight, setHeroHeight] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY <= heroHeight - 190) {
        setScrolled(0);
      } else {
        setScrolled(1);
      }
    });
  }, [heroHeight]);

  const getHeroHeight = (el) => {
    setHeroHeight(el.current.clientHeight);
  };

  return (
    <>
      <main role="main">
        <Helmet>
          <title>
            Disney+ | The streaming home of Disney, Marvel, Pixar, Star Wars,
            Nat Geo and Star.
          </title>
          <meta
            name="description"
            content="Disney+ is the streaming home of Disney, Pixar, Marvel, Star Wars, National Geographic and now Star. Star brings you a brand-new world of TV series, movies and new originals."
          />
          <meta
            name="twitter:url"
            content="https://www.disneyplus.com/en-gb/welcome"
          />
          <meta
            property="og:url"
            content="https://www.disneyplus.com/en-gb/welcome"
          />
          <meta
            name="twitter:description"
            content="Disney+ is the streaming home of Disney, Pixar, Marvel, Star Wars, National Geographic and now Star. Star brings you a brand-new world of TV series, movies and new originals."
          />
          <meta
            property="og:description"
            content="Disney+ is the streaming home of Disney, Pixar, Marvel, Star Wars, National Geographic and now Star. Star brings you a brand-new world of TV series, movies and new originals."
          />
          <meta
            name="twitter:title"
            content="Disney+ | The streaming home of Disney, Marvel, Pixar, Star Wars, Nat Geo and Star."
          />
          <meta
            property="og:title"
            content="Disney+ | The streaming home of Disney, Marvel, Pixar, Star Wars, Nat Geo and Star."
          />
          <meta
            name="twitter:image"
            content="https://cannonball-cdn.bamgrid.com/assets/originals/share-default.png"
          />
          <meta
            property="og:image"
            content="https://cannonball-cdn.bamgrid.com/assets/originals/share-default.png"
          />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
        </Helmet>
        <Header scrolled={scrolled} />
        <Hero heroHeightHandler={getHeroHeight} />
        <ImageTextSection
          title="Introducing STAR"
          image={starImage}
          alt="STAR Disney"
        >
          <p>
            Star on Disney+ brings you more. A brand-new world of TV series,
            movies and new originals, with thousands of hours of bigger, bolder
            and more exciting stories than ever before. Enjoy Star as part of
            your Disney+ subscription.
          </p>
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
          <p>
            See Raya and the Last Dragon before it's available to all Disney+
            subscribers on 4 June. Watch as many times as you like with Premier
            Access for £19.99 and your Disney+ subscription. Learn more.
            <ButtonLink route="/" large block gradient>
              Get premier access now
            </ButtonLink>
          </p>
        </ImageTextSection>
        <GridSection title="Exclusive Disney+ Originals" images={images}>
          Watch never-before-seen TV series, movies, shorts and more from the
          world’s greatest storytellers – only available on Disney+.
        </GridSection>
        <SignUpSection />
        <GridSection
          title="Stream endless entertainment"
          images={entertainmentImages}
        >
          Discover the best stories from Disney, Pixar, Marvel, Star Wars,
          National Geographic – and now, Star. From hit movies, TV series and
          timeless classics – there's something for everyone and every mood.
        </GridSection>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;

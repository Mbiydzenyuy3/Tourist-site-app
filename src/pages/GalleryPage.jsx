// import "../assets";
import HeroSection from "../component/HeroSection";
import Banner from "../component/Banner";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SectionHeading from "../component/SectionHeading";
import { Button } from "../component/Buttons";

const Gallery = () => {
  const images = [
    { src: "src/assets/ManandNature.png", alt: "Description 1" },
    { src: "src/assets/BoatRide.png", alt: "Description 2" },
    { src: "src/assets/Church.png", alt: "Description 3" },
    { src: "src/assets/cows.png", alt: "Description 4" },
  ];

  const images1 = [
    { src: "src/assets/familySkat.png", alt: "Description 5" },
    { src: "src/assets/farmers.png", alt: "Description 6" },
    { src: "src/assets/elephant.png", alt: "Description 7" },
    { src: "src/assets/kid-drinkingmilk.png", alt: "Description 8" },
  ];

  const images2 = [
    { src: "src/assets/ManandNature.png", alt: "Description 9" },
    { src: "src/assets/Girraff.png", alt: "Description 10" },
    { src: "src/assets/mosque.png", alt: "Description 10" },
    { src: "src/assets/tribePeople.png", alt: "Description 10" },
  ];

  const images3 = [
    { src: "src/assets/ManandNature.png", alt: "Description 9" },
    { src: "src/assets/Girraff.png", alt: "Description 10" },
    { src: "src/assets/mosque.png", alt: "Description 10" },
    { src: "src/assets/tribePeople.png", alt: "Description 10" },
  ];

  return (
    <>
      <Banner />
      <Header />
      <div className="hero">
        <HeroSection />
        <div className="container section-heading-wrapper">
          <SectionHeading title="Gallery" subtitle="Home" alignment="center" />
        </div>
      </div>
      <div className="container">
        <div className="cta-section">
          <Button label="Open Instagram" style="primary" />
        </div>
        <div className="gallery">
          <div className="gallery-items">
            {images.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} />
            ))}
          </div>
          <div className="gallery-items">
            {images1.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} />
            ))}
          </div>
          <div className="gallery-items">
            {images2.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} />
            ))}
          </div>
          <div className="gallery-items">
            {images3.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Gallery;

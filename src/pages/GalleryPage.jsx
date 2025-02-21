// import "../assets";
import HeroSection from "../component/HeroSection";
import Banner from "../component/Banner";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Button } from "../component/Buttons";
import HeroHeadings from "../component/hero-section/hero";
import { GalleryItems } from "../constant";

const Gallery = () => {
  const images = [
    { src: "src/assets/safari-monkey.png", alt: "Description " },
    { src: "src/assets/resort-home.png", alt: "Description " },
    { src: "src/assets/Girraff.png", alt: "Description " },
    { src: "src/assets/green-fields.png", alt: "Description" },
    { src: "src/assets/nature-bg.png", alt: "Description" },
    { src: "src/assets/adventure.png", alt: "Description" },
    // { src: "src/assets/village-home.png", alt: "Description" },
    // { src: "src/assets/BoatRide.png", alt: "Description" },
  ];

  const images1 = [
    { src: "src/assets/ManandNature.png", alt: "Description " },
    { src: "src/assets/mosque.png", alt: "Description " },
    { src: "src/assets/sunset.png", alt: "Description " },
    { src: "src/assets/Church.png", alt: "Description " },
    { src: "src/assets/kid-drinkingmilk.png", alt: "Description " },
    { src: "src/assets/city-image.png", alt: "Description" },
    { src: "src/assets/Riding.png", alt: "Description" },
    { src: "src/assets/water.png", alt: "Description" },
  ];

  const images2 = [
    { src: "src/assets/village.png", alt: "Description " },
    { src: "src/assets/cows.png", alt: "Description " },
    { src: "src/assets/elephant.png", alt: "Description " },
    { src: "src/assets/familySkat.png", alt: "Description " },
    { src: "src/assets/rwanda-home.png", alt: "Description " },
    { src: "src/assets/Monaments.png", alt: "Description " },
    { src: "src/assets/farmers.png", alt: "Description " },
    { src: "src/assets/tribePeople.png", alt: "Description" },
  ];

  return (
    <>
      <Banner />
      <Header />
      <div className="hero">
        <HeroSection />
        <div className="container section-heading-wrapper">
          {GalleryItems.map((items, index) => (
            <HeroHeadings
              key={index}
              title={items.title}
              name={items.name}
              image={items.image}
              substitle={items.subtitle}
            />
          ))}
        </div>
      </div>
      <div className="container">
        <div className="cta-section">
          <Button label="Open Instagram" style="primary" />
        </div>
      </div>
      <section className="gallery-section">
        <div className="container">
          <div className="gallery">
            <div className="gallery-items1">
              {images.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
              ))}
            </div>
            <div className="gallery-items2">
              {images1.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
              ))}
            </div>
            <div className="gallery-items3">
              {images2.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;

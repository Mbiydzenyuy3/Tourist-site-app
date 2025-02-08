// import "../assets";
import HeroSection from "../component/HeroSection";
import Banner from "../component/Banner";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Gallery = () => {
  const images = [
    { src: "src/assets/ManandNature.png", alt: "Description 1" },
    { src: "src/assets/BoatRide.png", alt: "Description 2" },
    { src: "src/assets/Church.png", alt: "Description 3" },
    { src: "src/assets/cows.png", alt: "Description 4" },
    { src: "src/assets/familySkat.png", alt: "Description 5" },
    { src: "src/assets/farmers.png", alt: "Description 6" },
    { src: "src/assets/elephant.png", alt: "Description 7" },
    { src: "src/assets/kid-drinkingmilk.png", alt: "Description 8" },
    { src: "src/assets/ManandNature.png", alt: "Description 9" },
    { src: "src/assets/Girraff.png", alt: "Description 10" },
  ];

  return (
    <>
      <Banner />
      <Header />
      <HeroSection />

      <div className="gallery">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Gallery;

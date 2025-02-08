import HeroSection from "../component/HeroSection";
import Banner from "../component/Banner";
import Header from "../component/Header";
import Footer from "../component/Footer";
// import Gallery from "./GalleryPage";

export default function HomePage() {
  // const heroImages = [
  //   { src: "src/assets/hero-bg2.png", alt: "Description 1" },
  //   { src: "src/assets/islandImage.png", alt: "Description 2" },
  // ];
  return (
    <>
      <Banner />
      <Header />

      <HeroSection value={ {}} />
      <div className="footer-holder">
        <Footer />
      </div>
    </>
  );
}

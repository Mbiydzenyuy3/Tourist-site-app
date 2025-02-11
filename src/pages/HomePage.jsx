import HeroSection from "../component/HeroSection";
import Banner from "../component/Banner";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SectionHeading from "../component/SectionHeading";
// import Card from "../component/CardDesign";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Header />
      <div className="hero">
        <HeroSection />
        <div className="container section-heading-wrapper">
          <SectionHeading
            title="Experience the beauty of Rwanda with us"
            subtitle="Discover the Land of a Thousand Hills"
            alignment="left"
          />
        </div>
      </div>
      <div className="container">
        <SectionHeading
          subtitle="Choose your Package"
          title="Select your Best Package for your Travel"
          alignment="center"
        />
      </div>
      <div className="card-section">
        <SectionHeading
          subtitle="Our Traveller Say"
          title="What our clients say about us"
          alignment="center"
        />
        {/* <Card
          image="src/assets/logo.png"
          name="Emma Waston"
          details="I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization."
        /> */}
      </div>
      <div className="footer-holder">
        <Footer />
      </div>
    </>
  );
}

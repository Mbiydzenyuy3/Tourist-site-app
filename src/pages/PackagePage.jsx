import Banner from "../component/Banner";
import Header from "../component/Header";
import Footer from "../component/Footer";
import HeroSection from "../component/HeroSection";
import SectionHeading from "../component/SectionHeading";

export default function ServicePage() {
  return (
    <>
      <Banner />
      <Header />
      <div className="hero">
        <HeroSection />
        <div className="container section-heading-wrapper">
          <SectionHeading
            title="Tour Package"
            subtitle="Home Tour Package"
            alignment="center"
          />
        </div>
      </div>
      <div className="container">
        <SectionHeading
          title="Tour Choose your Package"
          subtitle="Select your Best Package for your Travel"
          alignment="center"
        />
      </div>
      <Footer />
    </>
  );
}

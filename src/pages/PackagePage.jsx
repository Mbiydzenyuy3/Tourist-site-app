import Banner from "../component/Banner";
import Header from "../component/Header";
import Footer from "../component/Footer";
import HeroSection from "../component/HeroSection";
import HeroHeadings from "../component/HeroSection/HeroHeadings";
import { TourPackages } from "../constant";
import { HeadingCard } from "../component/SectionHeading";
import HomeCard from "../component/HomeCard/HomeCard";
import { HomecardItems } from "../constant";

export default function ServicePage() {
  return (
    <>
      <Banner />
      <Header />
      <div className="hero">
        <HeroSection />
        <div className="container section-heading-wrapper">
          {TourPackages.map((items, index) => (
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
        <HeadingCard
          subtitle="Choose your Package"
          title="Select your Best Package for your Travel"
          alignment="center"
        />
      </div>
      <section className="tour-packages">
        <div className="container">
          <div className="home-card-items">
            {HomecardItems.map((items, index) => (
              <HomeCard
                key={index}
                src={items.src}
                title={items.title}
                description={items.description}
              />
            ))}
          </div>
          <div className="home-card-items">
            {HomecardItems.map((items, index) => (
              <HomeCard
                key={index}
                src={items.src}
                title={items.title}
                description={items.description}
              />
            ))}
          </div>
          <div className="home-card-items">
            {HomecardItems.map((items, index) => (
              <HomeCard
                key={index}
                src={items.src}
                title={items.title}
                description={items.description}
              />
            ))}
          </div>
          <div className="home-card-items">
            {HomecardItems.map((items, index) => (
              <HomeCard
                key={index}
                src={items.src}
                title={items.title}
                description={items.description}
              />
            ))}
          </div>
        </div>
        <div className="container chevrons">
          <div className="chevron-left">
            <img src="/assets/chevron-left1.png" alt="chevron left" />
          </div>
          <div className="chevron-right">
            <img
              src="/assets/Arrow Chevron Right (1).png"
              alt="chevron right"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

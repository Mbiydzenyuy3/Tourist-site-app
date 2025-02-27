import HeroSection from "../component/HeroSection";
import Banner from "../component/Banner";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SectionHeading from "../component/SectionHeading";
import { HeadingCard } from "../component/SectionHeading";
import HeroForm from "../component/HeroForm";
import Card from "../component/CardDesign";
import HomeCard from "../component/HomeCard/HomeCard";
import { HomecardItems } from "../constant";
import { HomeCardItem2 } from "../constant";
import { HomeCardItem3 } from "../constant";
import DestinationCard from "../component/DestinationCard/DestinationCard";
import PackageCard from "../component/packages/PackageCard";
import { CardsItems } from "../constant";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Header />
      <section>
        <div className="hero">
          <HeroSection />
          <div className="container section-heading-wrapper">
            <SectionHeading
              title="Experience the beauty of Rwanda with us"
              subtitle="Discover the Land of a Thousand Hills"
              alignment="left"
            />
            <HeroForm />
          </div>
        </div>
      </section>
      <section className="hero-section-form">
        <div className="container">
          <HeadingCard
            subtitle="Choose your Package"
            title="Select your Best Package for your Travel"
            alignment="center"
          />
        </div>
      </section>
      <section>
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
        </div>
      </section>
      <section>
        <HeadingCard
          subtitle="Popular Destinations"
          title="Select Our Best Popular Destinations"
          alignment="center"
        />
      </section>
      <section>
        <div className="popular-destination-card">
          {HomeCardItem2.map((items, index) => (
            <DestinationCard
              key={index}
              src={items.src}
              title={items.title}
              description={items.description}
            />
          ))}
        </div>
      </section>
      <section>
        <HeadingCard
          subtitle="Why us?"
          title="Why Travel with Africa wizzy Safari"
          alignment="center"
        />
      </section>
      <section className="home-contact">
        <div className="container home-card-3-items">
          {HomeCardItem3.map((items, index) => (
            <PackageCard key={index} src={items.src} title={items.title} />
          ))}
        </div>
      </section>
      <section>
        <HeadingCard
          subtitle="Our Traveller Say"
          title="What our clients say about us"
          alignment="center"
        />
      </section>
      <section>
        <div className="container">
          <div className="card-section">
            {CardsItems.map((items, index) => {
              <Card
                key={index}
                src={items.image}
                title={items.title}
                description={items.description}
              />;
            })}
          </div>
        </div>
      </section>
      <div className="container">
        <div className="testimonial-items">
          <div className="orange"></div>
          <div className="green"></div>
          <div className="green"></div>
        </div>
      </div>
      <div className="footer-holder">
        <Footer />
      </div>
    </>
  );
}

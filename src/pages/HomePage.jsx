import HeroSection from "../component/HeroSection";
import Banner from "../component/Banner";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SectionHeading from "../component/SectionHeading";
import { HeadingCard } from "../component/SectionHeading";
import HeroForm from "../component/hero-form";
import Card from "../component/CardDesign";
import HomeCard from "../component/HomeCard/HomeCard";
import { HomecardItems } from "../constant";
import { HomeCardItem2 } from "../constant";
import { HomeCardItem3 } from "../constant";
import PopularDestinationCard from "../component/PagesCard/popularDestination";
import PackageCard from "../component/packages/package";

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
          <HeroForm />
        </div>
      </div>
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
      <HeadingCard
        subtitle="Popular Destinations"
        title="Select Our Best Popular Destinations"
        alignment="center"
      />
      <section>
        <div className="popular-destination-card">
          {HomeCardItem2.map((items, index) => (
            <PopularDestinationCard
              key={index}
              src={items.src}
              title={items.title}
              description={items.description}
            />
          ))}
        </div>
      </section>
      <HeadingCard
        subtitle="Why us?"
        title="Why Travel with Africa wizzy Safari"
        alignment="center"
      />
      <section className="home-contact">
        <div className="container home-card-3-items">
          {HomeCardItem3.map((items, index) => (
            <PackageCard key={index} src={items.src} title={items.title} />
          ))}
        </div>
      </section>
      <HeadingCard
        subtitle="Our Traveller Say"
        title="What our clients say about us"
        alignment="center"
      />
      <div className="card-section">
        <Card
          image="src/assets/home-profile-photo.png"
          title="Emma Waston"
          details="I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization."
        />
        <Card
          image="src/assets/home-profile-photo.png"
          title="Emma Waston"
          details="I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization."
        />
        <Card
          image="src/assets/home-profile-photo.png"
          title="Emma Waston"
          details="I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization."
        />
      </div>
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

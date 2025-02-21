import Banner from "../component/Banner";
import Header from "../component/Header";
import Footer from "../component/Footer";
// import HeroSection from "../component/HeroSection";
import SectionHeading from "../component/SectionHeading";
import { Button } from "../component/Buttons";

export default function AboutPage() {
  return (
    <>
      <Banner />
      <Header />
      <section className="about-hero">
        <div className=" section-heading-wrapper about-us-hero-content">
          <SectionHeading
            title="We are dedicated to
            providing the best travel experience"
            subtitle="Discover the Land of a Thousand Hills"
            alignment="left"
          />
        </div>
        <div className="container">
          <div className="about-form">
            <div className="hero-form">
              <form action="" className="form-inputs" id="form-details">
                <div className="input-field" id="input-field-id">
                  <div className="hero-guest-input">
                    Guest
                    <select name="guest" id="user-guest" className="guest">
                      <option value="age-group" default>
                        2 Adult
                      </option>
                      <option value="age-group" default>
                        Adult
                      </option>
                    </select>
                  </div>
                  <div className="date">
                    Date
                    <select name="calendar" id="calendar">
                      <option value="calendar">12 - 13 April 2022</option>
                    </select>
                  </div>
                  <div className="packages">
                    Packages
                    <select name="all" id="all-option">
                      <option value="all">Akagera Tour</option>
                      <option value="all">All</option>
                    </select>
                  </div>
                </div>
                <Button label="Book Now" style="background-color-green" />
              </form>
            </div>
          </div>
        </div>
        <img
          className="about-us-hero-image"
          src="/assets/safari-monkey.png"
          alt=""
        />
      </section>
      <div className="container safari-africa-blog">
        <div className="safari-heading">
          <h2 className="wizzy-safari-heading">
            Welcome to Africa Wizzy Safari
          </h2>
          <div className="safari-green-bold"></div>
        </div>

        <div className="about-africa-safari">
          <div className="image-wrap">
            <img src="/assets/safari-home.png" alt="" />
          </div>
          <div className="safari-content">
            <p>
              Welcome to Africa Wizzy Safari, a leading tourism company based in
              Rwanda. We have been in business for over 5 years and are
              committed to providing top-quality tours and services to our
              clients. Our mission is to showcase the beauty and culture of
              Rwanda to visitors from around the world, and to contribute to the
              sustainable development of the country through responsible tourism
              practices.
            </p>
          </div>
        </div>
        <div className="about-africa-safari">
          <div className="safari-content">
            <p>
              Welcome to Africa Wizzy Safari, a leading tourism company based in
              Rwanda. We have been in business for over 5 years and are
              committed to providing top-quality tours and services to our
              clients. Our mission is to showcase the beauty and culture of
              Rwanda to visitors from around the world, and to contribute to the
              sustainable development of the country through responsible tourism
              practices.
            </p>
          </div>
          <div className="image-wrap">
            <img src="/assets/crossing-bridge.png" alt="" />
          </div>
        </div>
        <div className="about-africa-safari">
          <div className="image-wrap">
            <img src="/assets/hero-image.png" alt="" />
          </div>
          <div className="safari-content">
            <p>
              Welcome to Africa Wizzy Safari, a leading tourism company based in
              Rwanda. We have been in business for over 5 years and are
              committed to providing top-quality tours and services to our
              clients. Our mission is to showcase the beauty and culture of
              Rwanda to visitors from around the world, and to contribute to the
              sustainable development of the country through responsible tourism
              practices.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

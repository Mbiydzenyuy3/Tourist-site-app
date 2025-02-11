import Banner from "../component/Banner";
import Header from "../component/Header";
import Footer from "../component/Footer";
// import HeroSection from "../component/HeroSection";
import SectionHeading from "../component/SectionHeading";

export default function AboutPage() {
  return (
    <>
      <Banner />
      <Header />
      <section className="hero container">
        <div className=" section-heading-wrapper about-us-hero-content">
          <SectionHeading
            title="We are dedicated to
            providing the best travel experience"
            subtitle="Discover the Land of a Thousand Hills"
            alignment="left"
          />
        </div>
        <img
          className="about-us-hero-image"
          src="src/assets/safari-monkey.png"
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
            <img src="src/assets/safari-home.png" alt="" />
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
            <img src="src/assets/crossing-bridge.png" alt="" />
          </div>
        </div>
        <div className="about-africa-safari">
          <div className="image-wrap">
            <img src="src/assets/hero-image.png" alt="" />
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

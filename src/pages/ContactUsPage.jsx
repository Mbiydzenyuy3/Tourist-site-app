import Banner from "../component/Banner";
import Header from "../component/Header";
import Footer from "../component/Footer";
import HeroSection from "../component/HeroSection";
import SectionHeading from "../component/SectionHeading";
import ContactForm from "../component/FormValidation";

export default function ContactPage() {
  return (
    <>
      <Banner />
      <Header />
      <div className="hero">
        <HeroSection />
        <div className="container section-heading-wrapper">
          <SectionHeading
            title="Contact Us"
            subtitle="Home"
            alignment="center"
          />
        </div>
      </div>
      <div className="container">
        <div className="get-intouch">
          <h2>Get in Touch</h2>
          <p className="intouch-p">
            We would love to hear from you! If you have any comments or
            suggestions about our website or our tours, please do not hesitate
            to get in touch. We are always looking for ways to improve and make
            your travel experience even better.
          </p>
        </div>
        <div className="form">
          <ContactForm />
        </div>
      </div>

      <Footer />
    </>
  );
}

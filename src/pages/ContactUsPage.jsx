import Banner from "../component/Banner";
import Header from "../component/Header";
import Footer from "../component/Footer";
import HeroSection from "../component/HeroSection";
import HeroHeadings from "../component/hero-section/hero";
import { Button } from "../component/Buttons";
import { Contact } from "../constant";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneCode: "+250",
    phoneNumber: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", {
      ...formData,
      fullPhone: `${formData.phoneCode}${formData.phoneNumber}`,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Banner />
      <Header />
      <div className="hero">
        <HeroSection />
        <div className="container section-heading-wrapper">
          {Contact.map((items, index) => (
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
      <section className="contact-section">
        <div className="container">
          <div className="get-intouch">
            <h2 className="contact-heading">Get in Touch</h2>
            <p className="contact-p">
              We would love to hear from you! If you have any comments or
              suggestions about our website or our tours, please do not hesitate
              to get in touch. We are always looking for ways to improve and
              make your travel experience even better.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <h2 className="contact-form-heading">Contct us</h2>
            <div className="name-field">
              <div className="form-group">
                <label htmlFor="firstName" className="name">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstName" className="name">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="email-item">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter a valid email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group phone-group">
              <label htmlFor="phoneNumber" className="phone-number-item">
                Phone Number
              </label>
              <div className="phone-input">
                <select
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleChange}
                  className="country-code"
                >
                  <option value="+250">+250</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+27">+27</option>
                </select>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="message-item">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write a message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              />
            </div>
            <Button label="Submit" style="button-align-left" />
          </form>
        </div>
      </section>
      <section className="contact-detail-section">
        <div className="container contact-media">
          <div className="media">
            <h2 className="media-contact-heading">Social media</h2>
            <div className="media-icons">
              <img src="src/assets/linkedIn-green.png" alt="linkedin" />
              <img src="src/assets/twitter-green.png" alt="twitter" />
              <img src="src/assets/insta-green.png" alt="insta" />
              <img src="src/assets/facebook-green.png" alt="facebook" />
            </div>
          </div>
          <div className="media">
            <h2 className="media-contact-heading">Email & phone</h2>
            <div className="media-details">
              <div className="phone-number">
                <img src="src/assets/phone-green.png" alt="" />
                <p className="telephone">+250 784 688 641</p>
              </div>
              <div className="email-address">
                <img src="src/assets/mail-green.png" alt="" />
                <p className="contact-email">bbonteemma@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="media">
            <h2 className="media-contact-heading">Address</h2>
            <div className="address">
              <p className="address-p">kk 600 st Kigali, Rwanda</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

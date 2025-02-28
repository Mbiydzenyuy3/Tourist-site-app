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
          src="https://s3-alpha-sig.figma.com/img/4ff2/5fbb/d22801330eccf9aaeedf7388f729ecdf?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=szEUR6hNWkXzJIOVxDtJrT-TXVhNj5bWHAWhZyDfvjEjnPRhIwR750uREpQLgLKzhTGQ08U~F1sQt2oX3ZrgHXO9MgOn9CxEoyWSek0GvKkz0r7rl16qmn-4ZrUTlY3QdFfGb9WgNy0ToNd-DwtGVUnd6mDIZGLGtXza1hufCrG~9GinbDc7n2AesJyvlsQQwdduRwh-sT5y2kr92sIWVWyyf6QQEz1VUV8GpqBTLZp3pu5aV5f0L~0jLoLvrQRARY5qWM9QI6lAele9TXfXPfT9mryWXUUBScuw5yaxczQVnkpOLzLb6dWDBXWeCeZCFP47V41VwAPnkNYSTNZazw__"
          alt="monkeys"
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
            <img
              src="https://s3-alpha-sig.figma.com/img/8c88/8b29/002577f7500b2ab4a99aaa7d8e6be7f0?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QZofUFwutUu1VyMqr~cErUsYGJrnpHnjb78T7n7Fqg12lWSdRzJtAa9LWR9r8rmE7McnomsQTBHjzwXdj2-XUaNEtAqGSQvET1lZeBnh4Bm1z05QGOj41DHomDaUIJVytMK84dZBvGTv~yMFmalzoYE55hLZ5cCkHwtf0PjxN1tTYQqWLaZTNXdIVRavEIPbthDuiuzGLF7~dFioLYpOsu9vtin2doQL1gZIiyLhC1~BxCfBmxRtPaZ0JKsUuUtMtNDUmxH1H~oU27haaOJoFZbkKhN9kAUrpiLOsqm35YdSqAb2GQpn2aFTpedPKhOFrRdHK73K-qfu8kHDOQ37Qw__"
              alt=""
            />
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
            <img
              src="https://s3-alpha-sig.figma.com/img/7600/56f9/b94a31ecc9af090ab219a5e6a933a894?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fmpo6W91lMBqir8hCS~HYsn2LlpOdNICYOjCF0~52MLGSDTnLiQy1cj5sH2-WlgL68qOIKRLaRcJx4I2C15~IsmXzMUbxYg1npkYAZiGVL0KFKkiAzGG64BqzI5jjOu5RI-Hp44OVG9cUEvCl3DbsHQsR652XCrEoNWJWJLWMWssvJPYkLgxt9oxFYOFV23XOwa2Bib9FoT3qX0DqMSHYVAMl7dQ2wgMc69QebtgPBejyxKUngld~zy9qcB6SYePWothSPhfTJ84ooq7l7boqUrGlB5J57YXMVBvFDRlYC3bSm-6hhO2nDC3IVb2TUVuK~uwkNOF6LsoyBYto0keKw__"
              alt=""
            />
          </div>
        </div>
        <div className="about-africa-safari">
          <div className="image-wrap">
            <img
              src="https://s3-alpha-sig.figma.com/img/fd63/971c/9ce5d2804ffd9f32ac67720292bd35a8?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ngOyS3R6XL2OhjBFCtMPVWY--aggR7klENKI-aaTaKPswcEjmCaxH5JicSHuwfUHGek3F4FjwmVAuRXaL-ThMycsBthJOgU70F0gCFa6ESOQUfwcbBFKa1LU1WfvEFuualujo8dMG4qgvD779QAgOigYKvtfvq0rn6BJLSPsrFHKtC0-Pwgcmb6ORBjH6jEULET1TggLQverAsW7hjbJ7NOSnsXNgujzKyDnmK8PjXdWEp-JIsoIbFCs3DQZP905vm-4iJAswOrABAN99mONc5VreTutSsJC0WV8m4Cp5HLqksXY1CRgBkBKf-yJm-6vJDCvObli4N6goU9ZEY6OeA__"
              alt=""
            />
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

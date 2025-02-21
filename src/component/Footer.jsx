import Media from "./socialIcons";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content container">
          <div className="footer-details">
            <h3>If you have any question, Let us help you!</h3>
            <div className="footer-detail-item">
              <p className="footer-p">
                If you have any questions or would like to book a tour with us,
                please do not hesitate to contact us.
              </p>
              <div className="footer-span">
                <span>Phone: +250 788 123 456</span>
                <span>Email: info@rwandatourism.com </span>
                <span>Address: Kigali, Rwanda</span>
              </div>
              <div className="footer-subscribe">
                <h4>Subscribe to our newspaper</h4>
                <form action="" className="footer-form">
                  <input
                    type="text"
                    className="footer-input"
                    placeholder="Input your email here"
                  />
                  <button className="message">
                    <img src="/assets/message.png" alt="" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="social-links">
            <div className="footer-item">
              <div className="brand">
                <img src="/assets/logo.png" alt="logo" />
                <Media />
              </div>
              <div className="p-footer">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <div className="footer-item-nav">
                  <ul>
                    <a href="">Home</a>
                    <a href="">Testimonials</a>
                    <a href="">Destination</a>
                    <a href="">signin</a>
                  </ul>

                  <ul>
                    <a href="">About us</a>
                    <a href="">Packages</a>
                    <a href="">Events</a>
                    <a href="">Gallery</a>
                  </ul>
                  <ul>
                    <a href="">Our Team</a>
                    <a href="">Blog</a>
                    <a href="">Contact us</a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>&copy; 2025 TourismSite. All rights reserved.</p>
      </footer>
    </>
  );
}

import SocialMedia from "./SocialMedia";
export default function Banner() {
  return (
    <>
      <div className="banner">
        <div className="container banner-flex">
          <div className="group-banner-contact">
            <div className="contact">
              <img src="/assets/phone.png" alt="phone" />
              <span className="phone-number"> +250 784 688 641</span>
            </div>
            <div className="mail">
              <img src="/assets/mail.png" alt="email" />
              <span className="email"> bbonteemma@gmail.com</span>
            </div>
          </div>
          <SocialMedia />
        </div>
      </div>
    </>
  );
}

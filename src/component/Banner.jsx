import Media from "./socialIcons";
export default function Banner() {
  return (
    <>
      <div className="banner">
        <div className="group-banner-contact">
          <div className="contact">
            <img src="src/assets/phone.png" alt="phone" />
            <span className="phone-number"> +250 784 688 641</span>
          </div>
          <div className="mail">
            <img src="src/assets/mail.png" alt="email" />
            <span className="email"> bbonteemma@gmail.com</span>
          </div>
        </div>
        <Media />
      </div>
    </>
  );
}

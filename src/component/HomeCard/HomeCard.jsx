import PropTypes from "prop-types";
import { Button } from "../Buttons";

export default function HomeCard({ src, title, description }) {
  return (
    <>
      <div className="home-card">
        <img className="package-image" src={src} alt="title" />
        <h3 className="home-card-heading">{title}</h3>
        <p className="home-card-paragraph">{description}</p>
        <div className="home-button">
          <Button label="Learn More" />
        </div>
      </div>
    </>
  );
}

HomeCard.propTypes = {
  src: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
};

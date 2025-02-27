import PropTypes from "prop-types";
// import { cardItem } from "../constant";

export default function Card({ image, title, description }) {
  return (
    <>
      <div className="card">
        <div className="profile-circle">
          <img src={image} alt={title} />
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
};

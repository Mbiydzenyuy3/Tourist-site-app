import PropTypes from "prop-types";
// import { cardItem } from "../constant";

export default function Card({ image, name, details }) {
  return (
    <>
      <div className="card">
        <div className="profile-circle">
          <img src={image} alt={name} />
        </div>
        <div className="card-content">
          <h3>{name}</h3>
          <p>{details}</p>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  image: PropTypes.object,
  name: PropTypes.string,
  details: PropTypes.string,
};

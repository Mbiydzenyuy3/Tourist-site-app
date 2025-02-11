import PropTypes from "prop-types";

export default function Card({ profile }) {
  return (
    <>
      <div className="card">
        <img src={profile.image} alt={profile.title} />
        <div className="card-content">
          <h3>{profile.title}</h3>
          <p>{profile.details}</p>
        </div>
      </div>
    </>
  );
}

Card.proptype = {
  profile: PropTypes.string,
};

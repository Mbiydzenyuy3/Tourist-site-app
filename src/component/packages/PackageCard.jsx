import PropTypes from "prop-types";

export default function PackageCard({ src, title }) {
  return (
    <>
      <div className="package-card">
        <img src={src} alt="title" />
        <h3 className="package-card-heading">{title}</h3>
      </div>
    </>
  );
}

PackageCard.propTypes = {
  src: PropTypes.object,
  title: PropTypes.string,
};

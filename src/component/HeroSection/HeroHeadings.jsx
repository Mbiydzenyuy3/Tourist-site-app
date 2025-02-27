import PropTypes from "prop-types";

export default function HeroHeadings({ title, name, image, substitle }) {
  return (
    <>
      <div className="hero-headings">
        <h2>{title}</h2>
        <div className="hero-headings-content">
          <h5 className="hero-heading-name">{name}</h5>
          <img src={image} alt="title" />
          <h4 className="hero-heading4">{substitle}</h4>
        </div>
      </div>
    </>
  );
}

HeroHeadings.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.object,
  substitle: PropTypes.string,
};

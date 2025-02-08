import PropTypes from "prop-types";
import "./SectionHeading.css";

export default function SectionHeading({
  title,
  subtitle,
  alignment = "left"
}) {
  return (
    <div className={`section-heading ${alignment}`}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

SectionHeading.propType = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  alignment: PropTypes.string,
};

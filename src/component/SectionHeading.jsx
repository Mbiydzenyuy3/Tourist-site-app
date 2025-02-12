import PropTypes from "prop-types";
// import "./SectionHeading.css";

export default function SectionHeading({
  title,
  subtitle,
  alignment = "left",
}) {
  return (
    <div className={`section-heading ${alignment}`}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export function HeadingCard({ title, subtitle, alignment = "center" }) {
  return (
    <>
      <div className={`heading-card ${alignment}`}>
        <p className="heading-orange">{subtitle}</p>
        {subtitle && <h2 className="main-heading2">{title}</h2>}
      </div>
    </>
  );
}

SectionHeading.propType = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  alignment: PropTypes.string,
};

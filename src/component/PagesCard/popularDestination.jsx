export default function PopularDestinationCard({ src, title, description }) {
  return (
    <>
      <div className="popular-card">
        <img src={src} alt="title" />
        <div className="popular-item-content">
          <h3 className="popular-card-heading">{title}</h3>
          <p className="popular-card-p">{description}</p>
        </div>
      </div>
    </>
  );
}

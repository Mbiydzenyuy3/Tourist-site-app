export default function PackageCard({ src, title }) {
  return (
    <>
      <div className="package-card">
        <img src={src} alt="title" />
        <h3 className="home-card-heading">{title}</h3>
      </div>
    </>
  );
}

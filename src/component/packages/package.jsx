export default function PackageCard(image, title) {
  return (
    <>
      <div className="package-card">
        <img src={image} alt="title" />
        <h3 className="home-card-heading">{title}</h3>
      </div>
    </>
  );
}

import { Button } from "../Buttons";

export default function HomeCard(src, title, description) {
  return (
    <>
      <div className="home-card">
        <img src={src} alt="title" />
        <h3 className="home-card-heading">{title}</h3>
        <p>{description}</p>
        <Button label="Learn More" />
      </div>
    </>
  );
}

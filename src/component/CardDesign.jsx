import { Link } from "react-router-dom";
// import "./Card.css";

export default function Card({ destination }) {
  <div className="card">
    <img src={destination.image} alt={destination.title} />
    <div className="card-content">
      <h3>{destination.title}</h3>
      <p>{destination.excerpt}</p>
      <Link to={`/destinations/${destination.id}`} className="card-link">
        Learn More
      </Link>
    </div>
  </div>;
}

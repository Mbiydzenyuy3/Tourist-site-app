import { Link } from "react-router-dom";
import ButtonSignIn from "./Buttons";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="brand-logo">
          <img src="src/assets/logo.png" alt="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/package">Tour package</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </nav>
        <ButtonSignIn />
      </div>
    </>
  );
}

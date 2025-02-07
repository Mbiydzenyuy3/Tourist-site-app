import Navbar from "./navigation";
import ButtonSignIn from "./Buttons";
export default function Header() {
  return (
    <>
      <div className="header">
        <div className="brand-logo">
          <img src="src/assets/logo.png" alt="logo" />
        </div>

        <Navbar />
        <ButtonSignIn />
      </div>
    </>
  );
}

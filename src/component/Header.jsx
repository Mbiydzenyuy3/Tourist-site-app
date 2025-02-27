import { Link } from "react-router-dom";
import { Button } from "./Buttons";

export default function Header() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="brand-logo">
            <img className="site-logo"
              src="https://s3-alpha-sig.figma.com/img/7b44/3779/e00233c67a961c8bfdf2e37a4a1ceb1b?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nZvHZDGhrEn8fO~B-UrrPF3rR3YC1LDOl5yjBGHY-XC8dvcr7KvR3g6OFULOUHYwPJxi-oq-YSL3SolVgZV9j0Qbz3EjxhIAhBB~jTbQArb9N9LHpJvSYMbJBDZ3oicFjWf8zdoXD~ZeXTf3yJUhfvyCnpwz~hzrgpCRoMAYQbdrqdB2VNvKh8cJehsN-XBtTslfx7HjhBbkJwll~Js7scLiPzPmN-rp8PqIRB~fjCQL0xgqocI0~LnVpYAwXhLjBUP~ketSartDVM2t4esVa8l8XBPNLkdLheHGb2XbyfxcSY692DHN8C6rVoPi7Ko7Eh3ZggbbU5AwES1n10Z50Q__"
              alt="logo"
            />
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
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </nav>
          <Button label="SignIn" />
        </div>
      </div>
    </>
  );
}

import { Button } from "./Buttons";

export default function HeroForm() {
  return (
    <>
      <div className="hero-form">
        <form action="" className="form-inputs">
          <div className="input-field">
            <div className="hero-input">
              <input
                type="text"
                className="input"
                placeholder="Search activities or Destination"
              />
              <i></i>
            </div>
            <div className="hero-guest-input">
              Guest
              <select name="guest" id="user-guest" className="guest">
                <option value="age-group" default>
                  Adult
                </option>
              </select>
            </div>
            <div className="date">
              Date
              <select name="calendar" id="calendar">
                <option value="calendar">12 - 13 April 2022</option>
              </select>
            </div>
            <div className="packages">
              Packages
              <select name="all" id="all-option">
                <option value="all">All</option>
              </select>
            </div>
          </div>
          <Button label="Book Now" />
        </form>
      </div>
    </>
  );
}

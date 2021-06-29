import Navbar from "./Navbar";
import Button from "./Button";

function Header() {
  return (
    <div>
      <Navbar />
      <div className="img-container">
        <div className="velg-blomst-knapp">
          <Button text="Se vårt utvalg" />
        </div>
      </div>
    </div>
  );
}

export default Header;

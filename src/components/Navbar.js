export default function Navbar({ maintitle }) {
  return (
    <nav className="navbar">
      <div className="navbar-title">{maintitle}</div>
      <a href="#" className="toggle-button">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className="navbar-links">
        <ul>
          <li>
            <a href="#"></a>Binderi
          </li>
          <li>
            <a href="#"></a>Sesongens varer
          </li>
          <li>
            <a href="#"></a>Tøffe planter
          </li>
          <li>
            <a href="#"></a>Bryllup
          </li>
          <li>
            <a href="#"></a>Begravelse
          </li>
        </ul>
      </div>
    </nav>
  );
}

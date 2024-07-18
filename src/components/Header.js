import "./style/header.css";

const Header = () => (
  <header className="header-container">
    <h1>
      Valentin <span>Mathieu</span>
    </h1>
    <nav>
      <a href="#about">
        À propos
      </a>
      <a href="#projects">
        Mes projets
      </a>
      <a href="#contact">
        Contact
      </a>
    </nav>
  </header>
);

export default Header;

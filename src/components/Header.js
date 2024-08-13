import "./style/header.css";
import { scroller } from "react-scroll";

const Header = () => {

  const handleScroll = (e, target) => {
    e.preventDefault();
    scroller.scrollTo(target, {
      duration: 800,
      delay: 50,
      smooth: "true",
    });
  };

  return (
    <header className="header-container">
      <h1>
        Valentin <span>Mathieu</span>
      </h1>
      <nav>
        <a href="#about" rel="noreferrer" onClick={(e) => handleScroll(e, 'about')}>À propos</a>
        <a href="#projects" rel="noreferrer" onClick={(e) => handleScroll(e, 'projects')}>Mes projets</a>
        <a href="#contact" rel="noreferrer" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
      </nav>
    </header>
  );
};
export default Header;

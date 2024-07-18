import React from "react";
import { useState } from "react";

const About = () => {
  const [pagination, setPagination] = useState(0);

  const handlePreviousClick = () => {
    if (pagination === 0) {
      setPagination(1);
    }
    else {
      setPagination(0);
    }
  };

  const handleNextClick = () => {
    if (pagination === 1) { 
      setPagination(0);
    }

    else {
      setPagination(1);
    }
  };

  return (
    <>
      <div className="about">
        <div>
        <h2>Bonjour !</h2>
        <p>Je suis <span className="italic">développeur web</span> </p>
        <p>full-stack.</p>
        <p>Mes langages de prédilection </p>
        <p>
          sont <span>React</span> et
          <span> Javascript.</span>
        </p>
        </div>
      </div>
      <div className="langages">
        <button id="arrow_prec" onClick={handlePreviousClick}><img alt="précédent" src="../assets/arrow-left.png" width={50}></img></button>
        <button id="arrow_next" onClick={handleNextClick}><img alt="suivant" src="../assets/arrow-right.png" width={50}></img></button>
        <div id="langagesContainer" style={{ display: pagination === 0 ? "grid" : "none" }}>
        <div className="langage">
          <img src="../assets\langages/css.png" alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="langage">
          <img src="../assets\langages/html.png" alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="langage">
          <img src="../assets\langages/js.png" alt="Javascript" />
          <p>Javascript</p>
        </div>
        <div className="langage">
          <img src="../assets\langages/git.png" alt="Git" />
          <p>Git</p>
        </div>
        </div>
        <div id="langagesContainer" style={{ display: pagination === 1 ? "grid" : "none" }}>
        <div className="langage">
          <img src="../assets\langages/react.png" alt="React" />
          <p>React</p>
        </div>
        <div className="langage">
          <img src="../assets\langages/php.png" alt="PHP" />
          <p>PHP</p>
        </div>
        <div className="langage">
          <img src="../assets\langages/mysql.png" alt="MySQL" />
          <p>MySQL</p>
        </div>
        </div>
      </div>
    </>
  );
};

export default About;

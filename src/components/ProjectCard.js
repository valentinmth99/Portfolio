import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import "./style/project.css";

const ProjectCard = ({ title, description, repoLink, indication, backgroundImg, tags }) => 
  { 
  const { ref, inView } = useInView({
    threshold: 1.0, // Déclenchement lorsque l'élément est 100% visible
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (inView) {
      timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 1500); // Délai de 1.5 secondes
    } else {
      setIsVisible(false); // Réinitialiser si l'élément sort de la vue
    }

    return () => clearTimeout(timeoutId); // Nettoyer le timeout
  }, [inView]);

  return (
  <div id="projects" className="project_card">
    <a href={repoLink} target="_blank" rel="noopener noreferrer">
      <div
      ref={ref}
        className={`project_img ${isVisible ? 'scrolled' : ''}`}
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        <div className="hidden_project">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="project_tags">
          {tags.map((tag) => (
            <div className="project_tag">{tag}</div>
          ))}
          </div>
        </div>
      </div>
    </a>
    <p className="project_clic">{indication}</p>
    <p className="project_description">{description}</p>
  </div>
)};

export default ProjectCard;

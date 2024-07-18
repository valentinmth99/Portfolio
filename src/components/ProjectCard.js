import "./style/project.css";

const ProjectCard = ({ title, description, repoLink, backgroundImg, tags }) => (
  <div className="project_card">
    <a href={repoLink} target="_blank" rel="noopener noreferrer">
      <div
        className="project_img"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        <div className="hidden_project">
          <h2 className="text-2xl font-bold">{title}</h2>
          {tags.map((tag) => (
            <div className="project_tag">{tag}</div>
          ))}
        </div>
      </div>
    </a>
    <p className="mt-2">{description}</p>
  </div>
);

export default ProjectCard;

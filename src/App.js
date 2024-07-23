import './App.css';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import Header from './components/Header';
import { Description } from './components/Description';
import Footer from './components/Footer';

function App() {
 
  const projects = [
    {
      title: "Kasa",
      description: "Plateforme de location immobilière entre particuliers",
      repoLink: "/Kasa",
      tags: ["React", "Front-end"],
      backgroundImg:  "../assets/projets/kasa.png",
      indication: 'Cliquez sur la carte pour accéder au site',
    },
    {
      title: "ArgentBank",
      description: "Application d'une nouvelle banque en ligne",
      repoLink: "/ArgentBank",
      tags: ["React", "Redux", "Front-end"],
      backgroundImg:  "../assets/projets/argentbank.png",
      indication: 'Cliquez sur la carte pour accéder au site',
    },
    {
      title: "Happy Sardines",
      description: "Site de réservation pour un camping",
      repoLink: "link",
      tags: ["PHP", "Javascript", "Full-stack"],
      backgroundImg:  "../assets/projets/camping.png",
      indication: 'Cliquez sur la carte pour accéder au repo',
    },
  ];
  return (
    <>
    <Header />
      <main>
        <div className='main_container'>
        <section id="about_container">
          <About />
        </section>
        <Description />
        <section id="projects_container">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </section>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

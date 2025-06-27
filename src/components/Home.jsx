import linkedinLogo from "../assets/linkedin.svg";
import githubLogo from "../assets/github.svg";
import '../styles/Home.css';
function Home() {
  return <>
  <section id="home" className="container">
    <div className="info">
            <h2 className="text-center">Desarrollador de Software</h2>
            <h1 className="text-center text-white">Hamilton López</h1>
            <p className="text-center text-white mt-4">
              Desarrollador Full Stack con experiencia en aplicaciones web,
              backend y prácticas DevOps. Me apasiona aprender, optimizar procesos
              y aportar a proyectos con impacto.
            </p>
            <div className="text-center mt-5">
              <a
                href="https://www.linkedin.com/in/hamilton-l%C3%B3pez-g/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedinLogo}
                  className="logoLinkedin"
                  alt="LinkedIn logo"
                />
              </a>
              <a
                href="https://github.com/HamiltonLopez"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubLogo} className="logoGithub" alt="Github logo" />
              </a>
            </div>
          </div>
          </section>
  
  </>;
}

export default Home;

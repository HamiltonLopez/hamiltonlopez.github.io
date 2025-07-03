import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Projects.css";
import capProject from "../assets/project1/cap1.png";
import capProject2 from "../assets/project1/cap2.png";
import capProject3 from "../assets/project1/cap3.png";
import githubLogo from "../assets/github.svg";

function Projects() {
  return (
    <>
      <section id="projects" className="container">
        <h5 className="projects-title  text-center">Proyectos</h5>
        <div className="project-one card mb-3">
          <div className="row">
            <div className="col-md-6">
              <div
                id="carouselExampleFade"
                class="carousel slide carousel-fade"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src={capProject}
                      class="d-block w-100"
                      alt="ProjectOne"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={capProject2}
                      class="d-block w-100"
                      alt="ProjectOne"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={capProject3}
                      class="d-block w-100"
                      alt="ProjectOne"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
             
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <span className="tipo ">FullStack</span>
                <h6 className="project-title">Tienda de Relojes</h6>
                <p className="project-description text-white">
                  Aplicación web desarrollada en PHP para la gestión y venta de
                  relojes. 
                </p>
                <p className="project-description text-white">
                  <strong>Tecnologías:</strong> PHP, MySQL, HTML, CSS, JavaScript,
                  Bootstrap, Docker. 
                </p>
                <button className="git-button btn ">
                  <a href="https://github.com/HamiltonLopez/tempus-watch-store.git" >
                  <img src={githubLogo} alt="git-codigo" className='git-codigo me-2'/>
                  <span className='text-white'>Código</span>
                     
                  </a>
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;

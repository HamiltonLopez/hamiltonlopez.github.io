import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Projects.css";
import capProject from "../assets/project1/cap1.png";
import capProject2 from "../assets/project1/cap2.png";
import capProject3 from "../assets/project1/cap3.png";
import capProject4 from "../assets/project2/cap1.png";
import capProject5 from "../assets/project2/cap2.png";
import capProject6 from "../assets/project2/cap3.png";
import githubLogo from "../assets/github.svg";

function Projects() {
  return (
    <>
      <section id="projects" className="container">
        <h5 className="projects-title text-center">Proyectos</h5>
        <div className="project-one card mb-3">
          <div className="row">
            <div className="col-md-6">
              <div
                id="carouselProject1"
                className="carousel slide carousel-fade"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={capProject}
                      className="d-block w-100"
                      alt="ProjectOne"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={capProject2}
                      className="d-block w-100"
                      alt="ProjectOne"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={capProject3}
                      className="d-block w-100"
                      alt="ProjectOne"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselProject1"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselProject1"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
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
        <div className="project-one card mb-3">
          <div className="row">
           
            <div className="col-md-6">
              <div className="card-body">
                <span className="tipo ">FullStack</span>
                <h6 className="project-title">Tienda en Línea</h6>
                <p className="project-description text-white">
                  Storecode es una tienda virtual desarrollada en Java con Spring Boot, que permite a los usuarios comprar productos organizados por categorías, gestionar un carrito de compras, realizar compras y consultar su historial.
                </p>
                <p className="project-description text-white">
                  <strong>Tecnologías:</strong> Java, Spring Boot, Thymeleaf, HTML, CSS, Bootstrap, MySQL.
                </p>
                <button className="git-button btn ">
                  <a href="https://github.com/DanyVillalbaT/Proyecto-Final-Apps" >
                  <img src={githubLogo} alt="git-codigo" className='git-codigo me-2'/>
                  <span className='text-white'>Código</span>
                     
                  </a>
                </button>
                
              </div>
            </div>
             <div className="col-md-6">
              <div
                id="carouselProject2"
                className="carousel slide carousel-fade carousel-dark"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={capProject4}
                      className="d-block w-100"
                      alt="ProjectTwo"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={capProject5}
                      className="d-block w-100"
                      alt="ProjectTwo"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={capProject6}
                      className="d-block w-100"
                      alt="ProjectTwo"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselProject2"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselProject2"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
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

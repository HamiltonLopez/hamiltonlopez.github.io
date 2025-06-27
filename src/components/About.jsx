import foto from "../assets/foto.png";
import "../styles/About.css";
function About() {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="detalles row g-0">
            <div className="col-md-4">
              <img src={foto} className="fotoHamilton" alt="Foto" />
            </div>
            <div className="col-md-8">
              <div className="infoPerso card-body">
                <h5 className="card-title text-white">Sobre mí</h5>
                <p className="card-text text-white ">
                  Soy un apasionado del desarrollo de software con experiencia
                  en tecnologías modernas. He trabajado en proyectos que van
                  desde aplicaciones web hasta soluciones backend, integrando
                  prácticas DevOps para mejorar la eficiencia y escalabilidad.
                  Me encanta aprender, asumir nuevos retos y seguir creciendo
                  profesionalmente mientras contribuyo a proyectos con impacto
                  real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

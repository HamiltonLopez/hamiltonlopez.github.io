import "../styles/Skills.css";
import DockerLogo from "../assets/docker.png";
import PythonLogo from "../assets/piton.png";
import HtmlLogo from "../assets/html.png";
import AngularLogo from "../assets/angular.svg";
import CssLogo from "../assets/css.png";
import JavaLogo from "../assets/java.png";
import JSLogo from "../assets/js.png";
import ReactLogo from "../assets/react.svg";
import MysqlLogo from "../assets/mysql.svg";
import KubernetesLogo from "../assets/kubernetes.svg";
import GitLogo from "../assets/git.png";
import SpringLogo from "../assets/spring.svg";
import PhpLogo from "../assets/php.png";
import FastApiLogo from "../assets/fastapi.svg";
import GitActions from "../assets/github-actions.svg";
import GitHubLogo from "../assets/github.svg";
function Skills() {
  return (
    <>
      <section id="skills" className="skills">
        <div className="container text-center">

        <h5 className="skills-title m-5">Skills</h5>
        <div className="skills-section text-white mb-5" id="skills">


          <div className="skills-back col-6">
            <h6 className="skills-back-title">Back-end</h6>
            <img src={JavaLogo} className="java-logo" alt="Java logo" />
             <img src={SpringLogo} className="spring-logo" alt="Spring logo" />
            <img src={PythonLogo} className="python-logo" alt="python logo" />
            <img src={FastApiLogo} className="fastapi-logo" alt="FastAPI logo" />
            <img src={PhpLogo} className="php-logo" alt="PHP logo" />
        
            <img src={JSLogo} className="js-logo" alt="JavaScript logo" />

          <img src={MysqlLogo} className="mysql-logo" alt="MySQL logo" />

          </div>

          <div className="skills-front col-6">
            <h6 className="skills-front-title">Front-end</h6>
            <img src={HtmlLogo} className="html-logo" alt="HTML logo" />
            <img src={CssLogo} className="css-logo" alt="CSS logo" />
            <img src={AngularLogo} className="angular-logo" alt="Angular logo" />
            <img src={ReactLogo} className="react-logo" alt="React logo" />
          </div>

          <div className="skills-devops col-6 mt-5">
            <h6 className="skills-devops-title">DevOps / Infraestructura</h6>
            <img src={DockerLogo} className="docker-logo" alt="Docker logo" />
            <img src={KubernetesLogo} className="kubernetes-logo" alt="Kubernetes logo" />
            <img src={GitActions} className="github-actions-logo" alt="GitHub Actions logo" />
          </div>

          <div className="skills-control-version col-6 mt-5">
            <h6 className="skills-control-version-title">Control de versiones</h6>
            <img src={GitLogo} className="git-logo" alt="Git logo" />
            <img src={GitHubLogo} className="github-logo" alt="GitHub logo" />
          </div>



        </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
import ConveyorBelt from './ConveyorBelt';
// import github from "../images/github.png";
// import linkedin from "../images/linkedin.png";
// import mail from "../images/mail.png";
import '../styles/projects.css';

export default function Projects() {
  return (
    <div>
      <div>
        <ConveyorBelt/>
      </div>
      {/* <div>
        <footer>
            <p>&copy; 2024 Aimee Co. Website coded and built by Aimee Co. All rights reserved.</p>
            <div className="footer-container">
                <a
                href="https://github.com/aimeekco"
                target="_blank"
                rel="noopener noreferrer"
                className="github"
                >
                <img src={github} alt="Github" />
                </a>
                <a
                href="https://www.linkedin.com/in/aimee-co-686512290/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
                >
                <img src={linkedin} alt="Linkedin" />
                </a>
                <a
                href="mailto:aimeekco@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mail"
                >
                <img src={mail} alt="Mail" />
                </a>
            </div>
        </footer>
      </div> */}
    </div>
  );
}
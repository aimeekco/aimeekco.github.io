import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import mail from "../images/mail.png";
import "../styles/home.css";
import AboutMe from "./AboutMe";
import AboutSite from "./AboutSite";
import Contact from "./Contact";

function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="home">
            <section id="aboutme" data-aos="fade-up">
                <AboutMe />
            </section>
            <section id="contact" data-aos="fade-up">
                <h2>
                    Contact me!
                </h2>
                <Contact />
            </section>
            <section id="aboutsite" data-aos="fade-up">
                <AboutSite />
            </section>
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
        </div>
    );
}

export default Home;
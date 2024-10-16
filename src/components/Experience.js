import React from 'react';
import '../styles/experience.css'; 

const Experience = () => {
//   const skills = [
//     { name: "Python", level: 9 },
//     { name: "SystemVerilog", level: 8 },
//     { name: "FPGA", level: 8 },
//     { name: "R", level: 7 }
//   ];

  const roles = [
    {
      title: "Machine Learning and Software Intern, Dasion",
      description: "Leading a 4 person team to develop an AI-enhanced EMR platform for healthcare providers integrated with the SMART Health system, including CNNs for diagnosis, drug administration, and risk prediction trained on MIMIC III data through BigQuery. Additionally represented Dasion at West Coast Symposium for Addictive Disorders to showcase AI-driven healthcare solutions.",
      technologies: "Python, TensorFlow, Keras, BigQuery, EMR, SMART on FHIR"
    },
    {
      title: "Engineering Team Lead, 5C Hack",
      description: "Co-leading 4 person team to create dynamic website for 2025 Claremont Colleges Hackathon using ReactJS and deploying through Vercel. Additionally, managing team logistics and ensuring project completion by deadline.",
      technologies: "ReactJS, Vercel, JavaScript, HTML, CSS"
    },
    {
        title: "Teaching Assistant - Computing for the Web",
        description: "Assisting students in learning web development with HTML, CSS, and JavaScript with the goal of creating their own web apps.",
        technologies: "Python, HTML, CSS, JavaScript"
    },
    {
        title: "Project Lead - p-Newspaper, Pomona AI",
        description: "",
        technologies: "Python, JavaScript, HTML, CSS, Newspaper3k, AWS RDS, AWS Lambda, Docker, ReactJS, Flask"
    }
  ];

  const coursework = [
    "Data Structures and Program Development",
    "Computability and Logic",
    "Data Structures and Algorithms",
    "Principles of Computer Science",
    "Mathematics of Big Data",
    "Real Analysis",
    "Discrete Mathematics",
    "Differential Equations/Modeling",
    "Statistics and Experimental Design"
  ];

  return (
    <div className="experience-page">
      <section id="roles">
        <h1>Experience and Roles</h1>
        {roles.map((role, index) => (
          <div key={index} className="role">
            <h3>{role.title}</h3>
            <p>{role.description}</p>
            <p><strong>Technologies:</strong> {role.technologies}</p>
          </div>
        ))}
      </section>

      <section id="skills-coursework" className="skills-coursework-container">
        {/* <div className="skills">
          <h3>Skills</h3>
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <label htmlFor={skill.name}>{skill.name}</label>
              <progress id={skill.name} value={skill.level} max="10"></progress>
            </div>
          ))}
        </div> */}

        <div className="coursework">
          <h3>Relevant Coursework</h3>
          <ul>
            {coursework.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Experience;

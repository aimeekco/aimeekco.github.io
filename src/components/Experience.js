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
      title: "Machine Learning and Software Intern, Dasion ............................................. $5.24 - Present",
      description: "Leading a 4 person team to develop an AI-enhanced EMR platform for healthcare providers integrated with the SMART Health system.",
      technologies: "Python, TensorFlow, Keras, BigQuery, EMR, SMART on FHIR"
    },
    {
      title: "Engineering Team Lead, 5C Hack ....................................................................... $9.24 - Present",
      description: "Co-leading 4 person team to create dynamic website for 2025 Claremont Colleges Hackathon.",
      technologies: "ReactJS, Vercel, JavaScript, HTML, CSS"
    },
    {
        title: "Teaching Assistant - Computing for the Web ............................................... $8.24 - Present",
        description: "Assisting students in learning HTML, CSS, and JavaScript with the goal of creating their own web apps.",
        technologies: "Python, HTML, CSS, JavaScript"
    },
    {
        title: "Statistical Researcher, Stony Brook University ............................................. $5.24 - Present",
        description: "Co-authoring \"Air Quality and Latino-White Residential Segregation in West Oakland California: Lessons from the Racialized Place Inequality Framework\" analyzing spatial/aspatial segregation patterns.",
        technologies: "Python, GeoPandas, libpysal"
    },
    {
        title: "Project Lead - p-Newspaper, Pomona AI ................................................................ $2.24 - 5.24",
        description: "Led development of a web app to reduce user bias by leveraging open-ended user input to deliver personalized news from wide array of news sources.",
        technologies: "Python, JavaScript, HTML, CSS, Newspaper3k, AWS RDS, AWS Lambda, Docker, ReactJS, Flask, PostgreSQL, GoogleOAuth, GPT-4"
    },
    {
        title: "Lead Frontend Developer - p-Geolocation, Pomona AI ................................. $9.23 - 12.23",
        description: "Led front-end development to create web app to output a user’s location with error range on Google Maps given two pictures of the sun",
        technologies: "Python, JavaScript, HTML, CSS, Flask, ReactJS, Google Maps API"
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
        <div className="menu-title">
            <h1>Experience</h1>
        </div>
        <h2>Roles (Rolls)</h2>
        {roles.map((role, index) => (
          <div key={index} className="role">
            <h3>{role.title}</h3>
            <p>{role.description}</p>
            <p><strong>Technologies:</strong> {role.technologies}</p>
          </div>
        ))}
        <h2>Relevant Coursework</h2>
        <div className="coursework">
          <ul>
            {coursework.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
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

        
      </section>
    </div>
  );
};

export default Experience;

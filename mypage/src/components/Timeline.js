import React from 'react';
import '../styles/timeline.css';


const educationData = [
  {
    title: "Harvey Mudd College",
    degree: "BS Computer Science and Mathematics",
    startDate: "2024",
    endDate: "Present",
  },
  {
    title: "Pomona College",
    startDate: "2022",
    endDate: "2024",
  },
  {
    title: "Taipei American School",
    degree: "International Baccalaureate Diploma, High School Diploma",
    startDate: "2018",
    endDate: "2022",
  },
];

export default function BasicTimeline() {
    return (
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-date">
              {edu.startDate} - {edu.endDate}
            </div>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{edu.title}</h3>
              <p>{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>
    );
  } 
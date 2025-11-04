import React, { useEffect, useState } from "react";
import "../assets/css/tk_style.css";

function TkResume() {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/resume")
      .then((res) => res.json())
      .then((data) => setResume(data))
      .catch((err) => console.error(err));
  }, []);

  if (!resume) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <div className="left-column">
        <h1>{resume.name}</h1>
        <div style={{ textAlign: "center" }}>
          <img
            src="/src/assets/images/tarun_kannadas.png"
            alt={resume.name}
            height="150px"
            width="115px"
          />
        </div>
        <p className="mainheader">
          <img src="/src/assets/images/email.png" width="15" height="15" alt="email" />{" "}
          {resume.email}<br />
          <img src="/src/assets/images/call.png" width="15" height="15" alt="call" />{" "}
          {resume.phone}{" "}
          <img src="/src/assets/images/location.png" width="15" height="15" alt="loc" />{" "}
          {resume.location}
        </p>

        <h2 className="htwol">EDUCATION</h2>
        {resume.education.map((edu, i) => (
          <p className="paragraph" key={i}>
            <b>{edu.course}</b><br />
            {edu.institution}<br />
            {edu.duration} | {edu.location}
          </p>
        ))}

        <h2 className="htwol">LANGUAGES</h2>
        <p className="paragraph">{resume.languages.join(" | ")}</p>

        <h2 className="htwol">INTERESTS</h2>
        <p className="paragraph">{resume.interests.join(" | ")}</p>

        <h2 className="htwol">PROGRAMMING LANGUAGES</h2>
        <p className="paragraph">{resume.programming_languages.join(" | ")}</p>

        <h2 className="htwol">SKILLS</h2>
        <ul className="paragraph">
          {resume.skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>

        <h2 className="htwol">SOFTWARE & TOOLS</h2>
        <p className="paragraph">{resume.tools.join(" | ")}</p>
      </div>

      <div className="right-column">
        <h2 className="htwor">PROFILE</h2>
        <p>{resume.about}</p>

        <h2 className="htwor">EXPERIENCES</h2>
        {resume.experiences.map((exp, i) => (
          <div key={i}>
            <h3>{exp.company}</h3>
            <p>
              {exp.title}<br />
              {exp.duration}<br />
              {exp.description}
            </p>
          </div>
        ))}

        <h2 className="htwor">PROJECTS</h2>
        {resume.projects.map((p, i) => (
          <div key={i}>
            <h3>{p.title}</h3>
            <p>{p.duration}</p>
            <ul>
              {p.description.map((desc, j) => <li key={j}>{desc}</li>)}
            </ul>
          </div>
        ))}

        <h2 className="htwor">DECLARATION</h2>
        <p>{resume.declaration}</p>
        <div style={{ textAlign: "right" }}>
          <img
            src={`/src/assets/images/sign.jpg`}
            alt="signature"
            width="200px"
            height="100px"
          />
          <br />
          <b>{resume.name}</b>
        </div>
      </div>
    </div>
  );
}

export default TkResume;

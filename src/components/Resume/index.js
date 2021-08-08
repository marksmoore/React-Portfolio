import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Mark S. Moore</h2>
          <ul>
            <li>
              Core competencies in enterpirse content management, full-stack web
              development, data architecture, and managing integrations.
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/markstevenmoore/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
          </p>

          <a
            href="https://github.com/marksmoore/react-portfolio/raw/main/docs/MarkSMooreResume.docx"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            SDL Tridion, Adobe Experience Manager (6.5, As a cloud Service), C#.NET, ASP.NET, JAVA,<br />
            HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js, IndexedDB,<br />
            Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs, Templating.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
import React from "react";
import myResume from "../../docs/MarkSMooreResume.docx";

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
              Core competencies in Enterpirse Content Management and full-stack Web
              Development.
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
          <a className="resume-button" href={myResume}><button>Download my Resume</button></a>
         
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            HTML, CSS, JavaScript, jQuery, React.js, IndexedDB, Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs, Templating.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
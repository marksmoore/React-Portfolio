import React from 'react';
import myPhoto from '../../docs/Mark_med.jpg';

function About() {

    return(
        <section className="container">
            <h2 class="top-title">Mark S. Moore</h2>
            <hr></hr>
            <div>
                <div className="img-box col-lg-4"><img src={myPhoto} alt="Me" className="margin-block my-pic"/></div><br></br>
                <p>
                Educated as an Electrical Engineer, I transitioned to Content Management fifteen years ago. While most of my work has been project managment, I have long desired to learn software to round out the skills needed to complete all the tasks associated with my job. Completing the UT Coding Bootcamp will help me work toward completing that.
                </p>
            </div><br></br><br></br><br></br>
        </section>
    )
}

export default About;
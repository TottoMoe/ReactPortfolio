import React from "react";
import CTA from "./CTA";
import "../../style/Resume.css";
import {BsPatchCheckFill} from 'react-icons/bs'

function Resume() {
  return (
    <div>
      <section id="resume">
        <h5>What Skills I Have</h5>
        <h2> My Resume</h2>
        <CTA />
        <div className="container skill__container">
          {/* Frontend skills */}
          <div className="skill__frontend">
            <h3>Frontend Development</h3>
            <div className="skill__content">
              <article className="skill__details">
                <BsPatchCheckFill className="skill__details-icon" />
                <h4> HTML </h4>
              </article>
              <article className="skill__details">
                <BsPatchCheckFill className="skill__details-icon" />
                <h4> Javastrip </h4>
              </article>
              <article className="skill__details">
                <BsPatchCheckFill className="skill__details-icon" />
                <h4> CSS </h4>
              </article>
              <article className="skill__details">
                <BsPatchCheckFill className="skill__details-icon" />
                <h4> Bootstrap </h4>
              </article>
              <article className="skill__details">
                <BsPatchCheckFill className="skill__details-icon" />
                <h4> React.js </h4>
              </article>
              <article className="skill__details">
                <BsPatchCheckFill className="skill__details-icon" />
                <h4> jQuery </h4>
              </article>
            </div>
          </div>
          {/* Backend skills */}
          <div className="skill__backend">
            <h3>Backend Development</h3>
            <div className="skill__content">
              <article className="skill__details">
                <BsPatchCheckFill className="skill__details-icon" />
                <h4> MongoDB </h4>
              </article>
              <article className="skill__details">
                <BsPatchCheckFill className="skill__details-icon" />
                <h4> RESTful </h4>
              </article>
              <article className="skill__details">
                <BsPatchCheckFill className="skill__details-icon" />
                <h4> Node.js </h4>
              </article>
              <article className="skill__details">
                <BsPatchCheckFill className="skill__details-icon" />
                <h4> MySQL </h4>
              </article>
              <article className="skill__details">
                <BsPatchCheckFill className="skill__details-icon" />
                <h4> MVC </h4>
              </article>
              <article className="skill__details">
                <BsPatchCheckFill className="skill__details-icon" />
                <h4> PWA </h4>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;

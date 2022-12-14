import React from "react";
import "../style/Project.css";
import "./HeaderSocials";
import HeaderSocials from "./HeaderSocials";
import pj21 from "../assets/pj21.png";
import pj14 from "../assets/pj14.png";
import pj18 from "../assets/pj18.png";
import pj19 from "../assets/pj19.png";
import pj12 from "../assets/pj12.png";
import pj10 from "../assets/pj10.png";
import pj23 from "../assets/pj23.png";

function Project() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pj18} alt="SocialNetworkAPI" />
          </div>
          <h3>Social Network API</h3>
          <a
            href="https://github.com/TottoMoe/SocialNetworkAPI"
            className="btn"
            target="__blank"
          >
            Github
          </a>
          <a
            href="https://drive.google.com/file/d/1bP6JR2H7vEN2iMqOTMKtOulUTPMW0jO9/view"
            className="btn btn-secondary"
            target="__blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pj14} alt="MVCTechBlog" />
          </div>
          <h3>MVC TechBlog</h3>

          <a
            href="https://github.com/TottoMoe/MVCTechBlog"
            className="btn"
            target="__blank"
          >
            Github
          </a>
          <a
            href="https://mvctechblock98.herokuapp.com/"
            className="btn btn-secondary"
            target="__blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pj21} alt="" />
          </div>
          <h3>Book Search Engine</h3>
          <a
            href="https://github.com/TottoMoe/BookSearchEngine"
            className="btn"
            target="__blank"
          >
            Github
          </a>
          <a
            href="https://obscure-coast-46270.herokuapp.com/"
            className="btn btn-secondary"
            target="__blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pj23} alt="Star Chart" />
          </div>
          <h3>Star Chart</h3>
          <a
            href="https://github.com/TottoMoe/star-chart"
            className="btn"
            target="__blank"
          >
            Github
          </a>
          <a
            href="https://star-chart7.herokuapp.com/"
            className="btn btn-secondary"
            target="__blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pj12} alt="EmployeeTracker" />
          </div>
          <h3>Employee Tracker</h3>
          <a
            href="https://github.com/TottoMoe/12-EmployeeTracker"
            className="btn"
            target="__blank"
          >
            Github
          </a>
          <a
            href="https://drive.google.com/file/d/1402jgU8b-H5zCgoR3QFteuyEGeDPL67w/view"
            className="btn btn-secondary"
            target="__blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pj10} alt="TeamProfileGenerator" />
          </div>
          <h3>Team Profile Generator</h3>
          <a
            href="https://github.com/TottoMoe/10-TeamProfileGenerator"
            className="btn"
            target="__blank"
          >
            Github
          </a>
          <a
            href="https://drive.google.com/file/d/1gWsDyO7TfMZywuKBNI7T_YoWeFsE-DxU/view"
            className="btn btn-secondary"
            target="__blank"
          >
            Live Demo
          </a>
        </article>
      </div>
      <HeaderSocials />
    </section>
  );
}

export default Project;

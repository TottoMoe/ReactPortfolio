import React from "react";
import "../style/Project.css";
import "./HeaderSocials";
import pjproject from "../assets/pjproject.png";
import pj14 from "../assets/pj14.png";
import pj18 from "../assets/pj14.png";
import HeaderSocials from "./HeaderSocials";

function Project() {
  return (
    <section id="protfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pj14} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          {/* add target='_blank' */}
          <a
            href="https://github.com/TottoMoe/MVCTechBlog"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://github.com/TottoMoe/MVCTechBlog"
            className="btn btn-secondary"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pj18} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>

          <a href="https://github.com/TottoMoe/MVCTechBlog" className="btn">
            Github
          </a>
          <a
            href="https://github.com/TottoMoe/MVCTechBlog"
            className="btn btn-secondary"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pjproject} alt="" />
          </div>
          <h3>Primary Keys Rentals</h3>
          {/* add target='_blank' */}
          <a
            href="https://github.com/TottoMoe/PrimaryKeysRentals"
            className="btn"
          >
            Github
          </a>
          <a
            href="https://primary-keys-rentals.herokuapp.com/login"
            className="btn btn-secondary"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pj14} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          {/* add target='_blank' */}
          <a href="https://github.com/TottoMoe/MVCTechBlog" className="btn">
            Github
          </a>
          <a
            href="https://github.com/TottoMoe/MVCTechBlog"
            className="btn btn-secondary"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pj14} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          {/* add target='_blank' */}
          <a href="https://github.com/TottoMoe/MVCTechBlog" className="btn">
            Github
          </a>
          <a
            href="https://github.com/TottoMoe/MVCTechBlog"
            className="btn btn-secondary"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pj14} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          {/* add target='_blank' */}
          <a href="https://github.com/TottoMoe/MVCTechBlog" className="btn">
            Github
          </a>
          <a
            href="https://github.com/TottoMoe/MVCTechBlog"
            className="btn btn-secondary"
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

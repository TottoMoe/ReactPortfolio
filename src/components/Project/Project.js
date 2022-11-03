import React from 'react';
import './Project.css';
import pj14 from '../../assets/pj14.png';
import pj18 from "../../assets/pj14.png";

function Project(props) {
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
          <a href="https://github.com/TottoMoe/MVCTechBlog" className="btn">
            Github
          </a>
          <a
            href="https://github.com/TottoMoe/MVCTechBlog"
            className="btn btn-primary"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pj18} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          {/* add target='_blank' */}
          <a href="https://github.com/TottoMoe/MVCTechBlog" className="btn">
            Github
          </a>
          <a
            href="https://github.com/TottoMoe/MVCTechBlog"
            className="btn btn-primary"
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
            className="btn btn-primary"
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
            className="btn btn-primary"
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
            className="btn btn-primary"
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
            className="btn btn-primary"
          >
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
}

export default Project;
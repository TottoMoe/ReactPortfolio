import React from "react";
import HeaderSocial from "../HeaderSocials/HeaderSocials";

function About(props) {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <p>
          My name is Jenny Deng and I am excited to be a Software Development
          Student at the UC Berkeley Extension Flex Program. After some years of
          working in the hospitality industry, I decided to change my career to
          computer programing. I went to De Anza City College with good
          knowledge of Computer Science Fundamentals such as Data Structures,
          Algorithms, and Complexity Analysis. I have a solid understanding of
          Object-Oriented Design (OOD) & Object-Oriented Programming (OOP). I
          experienced writing unit tests using Junit. Open to learning new
          technologies and able to work in both independent and team
          environments. I have excellent verbal and written communication, and
          interpersonal skills.
        </p>
      </div>
      <HeaderSocial />
    </section>
  );
}

export default About;

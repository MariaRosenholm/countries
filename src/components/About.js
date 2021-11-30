import React from "react";

const About = () => {
  return (
    <div id="about">
      <div id="imageLayer"></div>
      <div id="aboutMain">
        <h2>Country search</h2>
        <p>
          From this webpage you can find basic information about various
          countries.
        </p>
        <p>
          This is a Business College Helsinki school assignment and the main aim
          of this project was to learn how to use React Router 6, Axios and
          fecth data from multiple APIs.
        </p>
      </div>
      <div className="footerWrapper footerWrapperAbout">
        <p>Copyrights</p>
        <p>App made by Maria Rosenholm 2021</p>
        <div id="footerPic"></div>
      </div>
    </div>
  );
};

export default About;

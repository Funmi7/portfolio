import React from "react";
import styled from "styled-components";
import profileImg from "../img/funmi.jpg";

const AboutMeStyled = styled.div`
  h1 {
    margin-bottom: 15vh;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;

    .lineStyle {
      background-color: rgb(45, 57, 82);
      height: 1px;
      position: relative;
      margin-left: 2rem;
      margin-right: 2rem;
      width: 20%;
    }
  }

  .skewedDiv {
    position: absolute;
    left: 0px;
    background: #0b0a1d;
    min-height: 500px;
    width: 100%;
    transform: skewY(-3deg);
    pointer-events: none;
    z-index: -1;
  }

  .aboutMeContainer {
    display: flex;
    justify-content: space-between;
    padding-left: 7rem;
    align-items: center;

    .imgDiv {
      width: 30rem;
      height: 30rem;
      border-radius: 50%;
      border-width: 5px;
      border-style: solid;
      border-color: rgb(248, 248, 248);
      border-image: initial;
      overflow: hidden;
      margin: 0px;

      .imgWrapper {
        position: relative;
        overflow: hidden;
        width: 100%;
        padding-bottom: 100%;
      }
      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: center center;
        transition-delay: 500ms;
      }
    }
    p {
      width: 50%;
      text-align: left;
      font-size: 1.8rem;
      color: #a0aec0;
    }
  }
`;

const AboutMe = () => {
  return (
    <AboutMeStyled>
      <h1>
        <div className="lineStyle"></div>
        About Me
        <div className="lineStyle"></div>
      </h1>
      <div className="aboutMeContainer">
        <div className="imgDiv">
          <div className="imageWrapper">
            <img src={profileImg} />
          </div>
        </div>
        <p>
          Hi I'm Funmi, a passionate and dedicated Software Engineer from
          Nigeria who enjoys building web applications.
          <br></br>
          <br></br>
          Through my experience at Lambda School, I've acquired the skills and
          knowledge of modern web technologies needed to build website that
          looks good, feels fantastic and functions optimally with efficient and modern backend.
        </p>
      </div>
    </AboutMeStyled>
  );
};

export default AboutMe;
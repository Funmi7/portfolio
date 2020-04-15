import React from "react";
import styled from "styled-components";
import profileImg from "../img/funmi.jpg";
import devices from "../utils/devices";


const AboutMeStyled = styled.div`
  padding-top: 10rem;
  height: 100vh;

  @media ${devices.large} {
    height: auto;
  }

  h1 {
    margin-bottom: 15vh;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${devices.mobile} {
      font-size: 2rem;
      margin-bottom: 5vh;
    }

    .lineStyle {
      background-color: rgb(45, 57, 82);
      height: 1px;
      position: relative;
      margin-left: 2rem;
      margin-right: 2rem;
      width: 20%;
    }
  }

  .aboutMeContainer {
    display: flex;
    justify-content: space-between;
    padding-left: 7rem;
    align-items: center;

    @media ${devices.tablet} {
      flex-direction: column;
      justify-content: none;
      align-items: center;
      padding-left: 0rem;
    }

    .imgDiv {
      width: 30%;
      height: 38rem;
      border-radius: 1rem;
      border-width: 5px;
      box-shadow: 8px 7px 6px -4px #0b0a1d;
      border-image: initial;
      overflow: hidden;
      margin: 0px;


      img {
        max-width: 100%;
        max-height: 100%;
        transition-delay: 500ms;
        object-fit: cover;
        object-position: center center;
      }

      @media ${devices.tablet} {
        width: 90%;
        height: 55rem;
      }

      @media ${devices.mobile} {
        height: 45rem;
      }
     
    }
    p {
      width: 50%;
      text-align: left;
      font-size: 1.8rem;
      color: #a0aec0;

      @media ${devices.tablet} {
        width: 90%;
        margin-top: 2rem;
      }
    }
  }
`;

const AboutMe = () => {
  return (
    <AboutMeStyled id="about-me">
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
          knowledge of modern web technologies needed for developing websites
          that looks good, feels fantastic and functions optimally with
          efficient and modern backend.
          <br></br>
          <br></br>
          When I'm not programming, I'm most likely reading a novel, seeing a
          movie, sight seeing or hanging out with friends and family
        </p>
      </div>
    </AboutMeStyled>
  );
};

export default AboutMe;

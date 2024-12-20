import React from "react";
import styled from "styled-components";
import profileImg from "../img/funmi.jpg";
import devices from "../utils/devices";
import Slide from "react-reveal/Slide";

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
    <Slide bottom>
      <AboutMeStyled id="about-me">
        <h1>
          <div className="lineStyle"></div>
          About Me
          <div className="lineStyle"></div>
        </h1>
        <div className="aboutMeContainer">
          <div className="imgDiv">
            <div className="imageWrapper">
              <img src={profileImg} alt="my profile" />
            </div>
          </div>
          <p>
            Hi! I am Funmi, a passionate and dedicated Software Engineer from
            Nigeria who enjoys building web applications.
            <br></br>
            <br></br>I have a passion for crafting intuitive and user-friendly
            web applications. I specialize in building responsive and accessible
            interfaces that enhance user experiences. I thrive in collaborative
            environments and enjoy solving complex challenges with innovative
            solutions.
            <br></br>
            <br></br>
            When I am not programming, I am most likely reading a novel,
            listening to pop music, seeing a movie, sight seeing or hanging out
            with friends and family.
          </p>
        </div>
      </AboutMeStyled>
    </Slide>
  );
};

export default AboutMe;

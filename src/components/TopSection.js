import React from "react";
import styled from "styled-components";
import githubIcon from "../img/githubIcon.svg";
import linkedInIcon from "../img/linkedInIcon.svg";
import twitterIcon from "../img/twitterIcon.svg";

const TopStyled = styled.div`
  display: flex;
  padding-top: 22rem;
  height: 100vh;
  text-align: left;
  justify-content: space-between;

  .left-section {
    h1 {
      font-weight: 900;
      font-size: 5rem;
    }

    h3 {
      color: #a0aec0;
    }
    h4 {
      color: rgb(56, 178, 172);
    }
    button {
      margin-top: 3rem;
      color: white;
      padding: 1rem;
      border-radius: 5px;
      border-style: none;
      cursor: pointer;
      background: #38b2ac;
      margin-bottom: 3rem;
    }

    img {
      max-width: 3rem;
      height: 3rem;
      margin-right: 2rem;
    }
  }

  .right-section {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
    border-radius: 1rem;
    background: #a0aec0;
    width: 35%;
    height: 37vh;

    .textDiv {
      margin-top: 5rem;
      margin-bottom: 5rem;
      margin-left: 3rem;
      margin-right: 3rem;
    }
    pre,
    b,
    span {
      color: #080a16;
      padding-bottom: 1rem;
      font-size: 1.6rem;
      background: #a0aec0;
    }
  }
`;

const TopSection = () => {
  return (
    <TopStyled>
      <div className="left-section">
        <h4>Hello, I'm</h4>
        <h1>Talabi Olufunmilayo</h1>
        <h3>A creative and Passionate Full Stack Web Developer</h3>
        <button>Download Resume</button>
        <div>
          <img src={githubIcon} />
          <img src={linkedInIcon} />
          <img src={twitterIcon} />
        </div>
      </div>
      <div className="right-section">
        <div className='textDiv'>
          <pre>
            1   class
            <b> Person </b>
            <span>{"{"}</span>
          </pre>
          <pre>
            2       constructor() 
            <span>{" {"}</span>
          </pre>
          <pre>
            4          this.name = "Talabi Olufunmilayo";  
          </pre>
          <pre>
            5          this.traits = ["frontendDev", "backendDev"];  
          </pre>
          <pre>
              6       <span>{"}"}</span>
          </pre>
          <pre>
              7   <span>{"}"}</span>
          </pre>
        </div>
      </div>
    </TopStyled>
  );
};

export default TopSection;

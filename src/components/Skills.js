import React from "react";
import styled from "styled-components";
import html5Icon from "../img/htmlIcon.svg";
import css3Icon from "../img/cssIcon.svg";
import jsIcon from "../img/jsIcon.svg";
import nodeIcon from "../img/nodejsIcon.svg";
import pythonIcon from "../img/pythonIcon.svg";
import reactIcon from "../img/reactIcon.svg";
import gitIcon from "../img/gitIcon.svg";

const SkillStyled = styled.div`
  height: 100vh;
  margin-top: 15rem;

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

  .firstSet,
  .secondSet {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 4rem;
  }

  .iconDiv {
    img {
      width: 10rem;
      height: 10rem;
    }
  }
`;

const Skills = () => {
  return (
    <SkillStyled>
      <h1>
        <div className="lineStyle"></div>
        My Skillsets
        <div className="lineStyle"></div>
      </h1>
      <div className="firstSet">
        <div className="iconDiv">
          <img src={html5Icon} />
        </div>
        <div className="iconDiv">
          <img src={css3Icon} />
        </div>
        <div className="iconDiv">
          <img src={jsIcon} />
        </div>
        <div className="iconDiv">
          <img src={reactIcon} />
        </div>
      </div>
      <div className="secondSet">
        <div className="iconDiv">
          <img src={nodeIcon} />
        </div>
        <div className="iconDiv">
          <img src={pythonIcon} />
        </div>
        <div className="iconDiv">
          <img src={gitIcon} />
        </div>
      </div>
    </SkillStyled>
  );
};

export default Skills;

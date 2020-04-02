import React from "react";
import styled from "styled-components";

const ProjectStyled = styled.div`
  height: 100vh;
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
`

const Projects = () => {
  return (
    <ProjectStyled>
      <h1>
        <div className="lineStyle"></div>
        Projects I've Built
        <div className="lineStyle"></div>
      </h1>
    </ProjectStyled>
  );
};

export default Projects;

import React from "react";
import styled from "styled-components";

const NavStyled = styled.div`
  padding-left: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0b0a1d;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: 8rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  overflow: hidden;

  .logoDiv {
    background: #0b0a1d;
  }

  .linkDiv {
    display: flex;
    background: #0b0a1d;

    .divStyle {
      background: #0b0a1d;
    }

    .navLink {
      margin-left: 5rem;
      background: #0b0a1d;
    }
  }

  .linkStyle {
    color: white;
    text-decoration: none;
    background: #0b0a1d;
  }
`;

function Navigation() {
  return (
    <NavStyled>
      <div className="divStyle">
        <a href="#" className="linkStyle">
          FT
        </a>
      </div>
      <div className="linkDiv">
        <div className="divStyle">
          <a href="#about-me" className="linkStyle">
            About
          </a>
        </div>
        <div className="navLink">
          <a href="#skills" className="linkStyle">
            Skills
          </a>
        </div>
        <div className="navLink">
          <a href="#projects" className="linkStyle">
            Projects
          </a>
        </div>
        <div className="navLink">
          <a href="#contact-me" className="linkStyle" to="/">
            Contact
          </a>
        </div>
      </div>
    </NavStyled>
  );
}

export default Navigation;

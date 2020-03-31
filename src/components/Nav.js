import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:  #0b0a1d;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: 20rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  overflow: hidden;

  .logoDiv {
  }

  .linkDiv {
    display: flex;

    .navLink {
      margin-left: 5rem;
    }
  }

  .linkStyle {
    color: white;
    text-decoration: none;
  }
 
`;

function Navigation() {
  return (
    <NavStyled>
      <div>
        <Link className="linkStyle" to="/">
          FT
        </Link>
      </div>
      <div className='linkDiv'>
        <div>
          <Link className="linkStyle" to="/">
            About
          </Link>
        </div>
        <div className='navLink'> 
          <Link className="linkStyle" to="/">
            Projects
          </Link>
        </div>
        <div className='navLink'>
          <Link className="linkStyle" to="/">
            Contact
          </Link>
        </div>
      </div>
    </NavStyled>
  );
}

export default Navigation;

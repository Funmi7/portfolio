import React from "react";
import styled from "styled-components";

const FooterStyled = styled.div`
  max-width: 100%;
  background-color: #0b0a1d;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: 20rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
  height: 60px;
  padding-left: 10%;
  padding-bottom: 5rem;

  a {
    text-decoration: none;
  }

  p {
    background-color: #0b0a1d;
    color: #38b2ac;
    text-align: center;
    cursor: pointer;
    padding-left: 7%;

    :hover {
      color: white;
    }
  }

  .icons {
    font-size: 1rem;
    color: white;
    cursor: auto;

    a {
      font-size: 1rem;
    }

    span {
      color: #38b2ac;
      cursor: pointer;
      :hover {
        color: white;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <a href="https://github.com/Funmi7/portfolio" target="_blank">
        <p>Designed and built by Funmilayo Talabi</p>
      </a>
      <p className="icons">
        Icons used got from
        <a href="https://konpa.github.io/devicon/" target="_blank"><span> DevIcon</span></a>,  <a href="https://www.flaticon.com/" target="_blank"><span>FlatIcon</span></a> and         <a href="https://www.iconfinder.com/" target="_blank"><span>IconFinder</span></a>
      </p>
    </FooterStyled>
  );
};

export default Footer;

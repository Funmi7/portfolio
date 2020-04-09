import React from "react";
import styled from "styled-components";

const ContactStyled = styled.div`
  margin-top: 150vh;
  height: 100vh;
  position: relative;

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

  p {
    width: 50%;
    text-align: center;
    margin-left: 25%;
    color: #a0aec0;
    font-size: 2rem;
  }
  button {
    margin-top: 5rem;
    color: white;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
    background: #38b2ac;
    margin-bottom: 3rem;
    font-size: 1.8rem;
  }
`;

const ContactMe = () => {
  return (
    <ContactStyled>
      <h1>
        <div className="lineStyle"></div>
        Get In Touch
        <div className="lineStyle"></div>
      </h1>
      <div>
        <p>
          Want me to join your team, or have a project you would like me to work
          on, or you just want to chat with me. You can simply just drop a
          message and I will respond to it ASAP.
        </p>
      </div>
      <button>Connect With Me</button>
    </ContactStyled>
  );
};

export default ContactMe;

import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <p>
        &copy; {new Date().getFullYear()} All Rights Reserved. made by{" "}
        <a
          href="https://github.com/Double-w-B"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Władysław Balandin{" "}
        </a>{" "}
      </p>{" "}
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  height: 6vh;
  font-size: 0.7rem;
  font-family: sans-serif;
  color: var(--grey-dark);
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: var(--red-primary);
    color: var(--blue-primary);
    font-family: "Lobster", cursive;
    letter-spacing: 0.05rem;
    font-size: 0.8rem;
  }
`;

export default Footer;

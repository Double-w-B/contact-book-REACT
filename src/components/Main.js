import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import ListContainer from "./ListContainer/ListContainer";

const Main = () => {
  return (
    <Wrapper>
      <Navbar />
      <ListContainer />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin-top: 6vh;
  width: 40rem;
  height: 87vh;
  border-radius: 0.6rem;
  border-bottom: 1.5px solid #aaaeb3;
  border-left: 1.5px solid #aaaeb3;
  border-right: 1.5px solid #aaaeb3;
  border-top: 1.5px solid #9b9ea3;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export default Main;

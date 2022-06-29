import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const NoContactsInfo = () => {
  const { darkMode } = useSelector((store) => store.themeMode);

  return (
    <StyledImgInfo className={darkMode ? "dark-mode" : ""}>
      <div className="info-img no-select">
        <i className="fas fa-user-plus"></i>
      </div>
      <div className="info-text no-select">add your first contact</div>
    </StyledImgInfo>
  );
};

const StyledImgInfo = styled.div`
  width: 100%;
  height: 25rem;
  color: var(--white-primary);

  &.dark-mode {
    .info-img {
      color: var(--white-secondary);
    }
    .info-text {
      color: var(--white-secondary);
    }
  }

  .info-img {
    width: 100%;
    height: 50%;
    font-size: 5rem;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-left: 0.8rem;
    opacity: 0.2;
    color: var(--grey-dark);
  }

  .info-text {
    width: 100%;
    height: 25%;
    text-align: center;
    margin-top: 2rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-size: 1.5rem;
    opacity: 0.2;
    color: var(--grey-dark);
  }
`;

export default NoContactsInfo;

import styled from "styled-components";

export const CustomLocationContainer = styled.div`
  margin-top: 9rem;

  @media (max-width: 500px) {
    margin-top: 7rem;
  }
`;

export const LeftArrowContainer = styled.span`
  background: #8862fc;
  border-radius: 20px;
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 10vw;
  cursor: pointer;

  @media (max-width: 1126px) {
    display: none;
  }
`;

export const LeftArrowIcon = styled.img`
  width: 20px;
  height: 20px;
`;

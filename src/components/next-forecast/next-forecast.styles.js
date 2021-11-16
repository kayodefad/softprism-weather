import styled, { css } from "styled-components";
import Lagos from "../../assets/images/lagos.svg";

const ButtonStyle = css`
  background: #8862fc;
  border-radius: 10px;
  font-size: 0.8rem;
  padding: 0.8rem 1.7rem;
`;

export const NextForecastHeader = styled.div`
  margin: 2rem 0 1rem 0;
  color: #fff;
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;

  div:nth-child(2) {
    ${ButtonStyle}
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const NextForecastContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;

  @media (max-width: 500px) {
    display: block;
    margin-bottom: 3rem;
  }
`;

export const LeftDiv = styled.div`
  flex: 1;
  border: 1px solid #8862fc;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  margin-right: 10px;
  height: 250px;
  padding: 1rem 0.5rem 1.5rem 0.5rem;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    font-size: 0.8rem;

    li {
      border-bottom: 1px solid #e3e3e3;
      padding: 0 1rem 0rem 1rem;

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      img {
        width: 40px;
      }
    }
  }

  @media (max-width: 500px) {
    margin-right: 0;
    margin-bottom: 3rem;
  }
`;

export const RightDiv = styled.div`
  flex: 1;
  height: 250px;
  margin-left: 10px;
  font-size: 0.7rem;

  div {
    &:first-child {
      width: 100%;
      height: 80%;
      background-image: url(${Lagos});
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 20px 20px 0 0;
      position: relative;
    }

    &:nth-child(2) {
      height: 20%;
      background: rgba(255, 255, 255, 0.05);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
      border-radius: 0 0 20px 20px;

      span:nth-child(2) {
        color: rgba(255, 255, 255, 0.5);
        transform: translateX(-60%);
      }
    }
  }

  @media (max-width: 500px) {
    margin-left: 0;
  }
`;

export const LocationDiv = styled.p`
  display: inline;
  position: absolute;
  top: 10px;
  left: 5px;
  display: flex;
  align-items: center;
  ${ButtonStyle}

  img {
    margin-right: 0.5rem;
  }
`;

export const TemperatureDiv = styled.span`
  font-size: 3.5rem;
  font-weight: bold;
  position: absolute;
  bottom: 0px;
  left: 10px;
`;

export const WeatherIcon = styled.img`
  position: absolute;
  bottom: 0px;
  right: 10px;
  width: 80px;
`;

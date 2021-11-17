import styled from "styled-components";

export const CustomWeatherContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #b9bcf2;
  border-radius: 20px;
  margin: auto;
  margin-top: 4rem;
  width: 90%;
  max-width: 280px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.3rem 2rem;
`;

export const WeatherIconDay = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 12px;

    span:nth-child(2) {
      font-size: 0.55rem;
      display: block;
      margin-top: 4px;
    }
  }

  img {
    width: 70px;
  }
`;

export const TemperatureContainer = styled.div`
  & > span {
    font-size: 7rem;
    font-weight: 500;
    position: relative;

    span {
      font-size: 1rem;
      position: absolute;
      top: 10%;
    }
  }
`;

export const Location = styled.div`
  font-size: 0.7rem;
  display: flex;
  align-items: center;

  img {
    width: 2px;
    margin: 0 0.5rem;
  }
`;
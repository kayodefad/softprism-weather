import styled from "styled-components";

export const TodayForecastContainer = styled.div`
  margin-top: 3rem;
  color: #fff;
`;

export const Title = styled.p`
  margin-bottom: 1rem;
`;

export const HourlyForecast = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
`;

export const HourlyForecastContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  width: 100%;
  height: 193px;
  border: 1px solid #8862fc;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  @media (max-width: 500px) {
    padding: 2rem 0.5rem;

    ${HourlyForecast}:last-child {
      display: none;
    }
  }
`;

export const Div = styled.div``;

export const Image = styled.img``;
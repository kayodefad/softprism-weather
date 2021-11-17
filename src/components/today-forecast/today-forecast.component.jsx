import React from "react";

import Loader from "../loader/loader.component";
import {
  TodayForecastContainer,
  Title,
  HourlyForecast,
  HourlyForecastContainer,
  Div,
  Image,
} from "./today-forecast.styles";
import { formatTime } from "../../utility-functions/format-time";

const TodayForecast = ({ currentWeatherData, isLoading }) => {
  let hourlyData = [];

  // Filtering the current weather data for the next five hours
  if (currentWeatherData !== null) {
    hourlyData = currentWeatherData.hourly.filter((_, i) => i < 5);
  }

  const renderOutput = () => {
    if (!currentWeatherData) return null;

    return (
      <>
        {currentWeatherData && (
          <>
            {hourlyData.map((data, i) => {
              let time = formatTime(new Date(data.dt * 1000));

              return (
                <HourlyForecast key={i}>
                  <Div>{Math.round(data.temp)}&deg;C</Div>
                  <Div>
                    <Image
                      src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                      alt="Weather Icon"
                    />
                  </Div>
                  <Div>{time}</Div>
                </HourlyForecast>
              );
            })}
          </>
        )}
      </>
    );
  };

  return (
    <TodayForecastContainer>
      <Title>Today's forecast</Title>
      <HourlyForecastContainer>
        {isLoading ? (
          <Loader color="rgba(255, 255, 255, 0.2)" />
        ) : (
          renderOutput()
        )}
      </HourlyForecastContainer>
    </TodayForecastContainer>
  );
};

export default TodayForecast;

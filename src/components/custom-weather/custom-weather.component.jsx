import React from "react";

import Dot from "../../assets/images/dot.svg";
import {
  CustomWeatherContainer,
  WeatherIconDay,
  TemperatureContainer,
  Location,
} from "./custom-weather.styles";

const CustomWeather = ({ location, currentWeatherData, isLoading }) => {
  // Parsing the current date
  const today = new Date();
  const dayOptions = { weekday: "long" };
  const monthOptions = { month: "long" };
  const parseTodayDate = `${new Intl.DateTimeFormat("en-US", dayOptions)
    .format(today)
    .slice(0, 3)}, ${today.getDate()} ${new Intl.DateTimeFormat(
    "en-US",
    monthOptions
  )
    .format(today)
    .slice(0, 3)}`;

  const time = today
    .toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
    .toLowerCase();

  const renderOutput = () => {
    if (!currentWeatherData) return null;

    return (
      <>
        <WeatherIconDay>
          <img
            src={`https://openweathermap.org/img/w/${currentWeatherData.weather.icon}.png`}
            alt="Weather Icon"
          />
          <div>
            <span>Today</span>
            <span>{parseTodayDate}</span>
          </div>
        </WeatherIconDay>
        <TemperatureContainer>
          <span>
            {Math.round(currentWeatherData.temperature)}
            <span>&deg;C</span>
          </span>
        </TemperatureContainer>
        <Location>
          <span>{location}</span>
          <img src={Dot} alt="Dot" />
          <span>{time}</span>
        </Location>
      </>
    );
  };

  return (
    <CustomWeatherContainer>
      {isLoading ? <p>Loading...</p> : renderOutput()}
    </CustomWeatherContainer>
  );
};

export default CustomWeather;

import React from "react";

import Dot from "../../assets/images/dot.svg";
import Loader from "../loader/loader.component";
import {
  CustomWeatherContainer,
  WeatherIconDay,
  TemperatureContainer,
  Location,
} from "./custom-weather.styles";
import { formatTime } from "../../utils/format-time";

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

  const time = formatTime(today);

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
      {isLoading ? (
        <Loader color="rgba(255, 255, 255, 0.2)" height="200px" />
      ) : (
        renderOutput()
      )}
    </CustomWeatherContainer>
  );
};

export default CustomWeather;

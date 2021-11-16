import React from "react";
import Dot from "../../assets/images/dot.svg";
import {
  CustomWeatherContainer,
  WeatherIconDay,
  TemperatureContainer,
  Location,
} from "./custom-weather.styles";

const CustomWeather = ({ location, currentWeatherData, isLoading }) => {
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

  // if (!currentWeatherData) return null;

  return (
    <CustomWeatherContainer>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {currentWeatherData && (
            <>
              <WeatherIconDay>
                <img
                  src={`http://openweathermap.org/img/w/${currentWeatherData.weather.icon}.png`}
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
          )}
        </>
      )}
    </CustomWeatherContainer>
  );
};

export default CustomWeather;

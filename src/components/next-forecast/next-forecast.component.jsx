import React from "react";

import LocationIcon from "../../assets/images/location-icon.svg";
import Loader from "../loader/loader.component";
import {
  NextForecastHeader,
  NextForecastContainer,
  LeftDiv,
  RightDiv,
  LocationDiv,
  TemperatureDiv,
  WeatherIcon,
} from "./next-forecast.styles";

const NextForecast = ({ currentWeatherData, location, isLoading }) => {
  let dailyData = [];

  if (currentWeatherData !== null) {
    // Filtering the current weather date for the next 5 days
    dailyData = currentWeatherData.daily.filter((_, i) => i < 5);
  }

  // Parsing the date
  const today = new Date();
  const dayOptions = { weekday: "long" };
  const monthOptions = { month: "long" };
  const parseTodayDate = `${new Intl.DateTimeFormat("en-US", dayOptions).format(
    today
  )}, ${today.getDate()} ${new Intl.DateTimeFormat(
    "en-US",
    monthOptions
  ).format(today)}`;

  const renderLeftOutput = () => {
    if (!currentWeatherData) return null;

    return (
      <ul>
        {dailyData.map((data, i) => {
          const date = new Date(data.dt * 1000);
          const parsedDate = `${new Intl.DateTimeFormat(
            "en-US",
            monthOptions
          ).format(date)} ${date.getDate()}`;

          return (
            <li key={i}>
              <div>
                <span>{parsedDate}</span>
                <img
                  src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                  alt="Weather Icon"
                />
                <span>{Math.round(data.temp.day)}&deg;C</span>
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderRightOutput = () => {
    if (!currentWeatherData) return null;

    return (
      <>
        <div>
          <LocationDiv>
            <img src={LocationIcon} alt="Location Icon" />
            <span>{location.split(",")[0]}</span>
          </LocationDiv>
          <TemperatureDiv>
            {Math.round(currentWeatherData.current.temp)}&deg;
          </TemperatureDiv>
          <WeatherIcon
            src={`https://openweathermap.org/img/w/${currentWeatherData.current.weather[0].icon}.png`}
            alt="Weather Icon"
          />
        </div>
      </>
    );
  };

  return (
    <>
      <NextForecastHeader>
        <div>Next forecast</div>
        <div>Five Days</div>
      </NextForecastHeader>
      <NextForecastContainer>
        <LeftDiv>
          {isLoading ? (
            <Loader color="rgba(255, 255, 255, 0.2)" />
          ) : (
            renderLeftOutput()
          )}
        </LeftDiv>
        <RightDiv>
          {isLoading ? (
            <Loader color="rgba(255, 255, 255, 0.2)" />
          ) : (
            renderRightOutput()
          )}
          <div>
            <span>{parseTodayDate}</span>
            {currentWeatherData && (
              <span>{currentWeatherData.current.weather[0].main}</span>
            )}
          </div>
        </RightDiv>
      </NextForecastContainer>
    </>
  );
};

export default NextForecast;

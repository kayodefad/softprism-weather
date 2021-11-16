import React from "react";
import LocationIcon from "../../assets/images/location-icon.svg";
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
    dailyData = currentWeatherData.daily.filter((_, i) => i < 5);
  }

  const today = new Date();
  const dayOptions = { weekday: "long" };
  const monthOptions = { month: "long" };
  const parseTodayDate = `${new Intl.DateTimeFormat("en-US", dayOptions).format(
    today
  )}, ${today.getDate()} ${new Intl.DateTimeFormat(
    "en-US",
    monthOptions
  ).format(today)}`;

  // if (!currentWeatherData) return null;

  return (
    <>
      <NextForecastHeader>
        <div>Next forecast</div>
        <div>Five Days</div>
      </NextForecastHeader>
      <NextForecastContainer>
        <LeftDiv>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {currentWeatherData && (
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
                            src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                            alt="Weather Icon"
                          />
                          <span>{Math.round(data.temp.day)}&deg;C</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </>
          )}
        </LeftDiv>
        <RightDiv>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {currentWeatherData && (
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
                      src={`http://openweathermap.org/img/w/${currentWeatherData.current.weather[0].icon}.png`}
                      alt="Weather Icon"
                    />
                  </div>
                  <div>
                    <span>{parseTodayDate}</span>
                    <span>{currentWeatherData.current.weather[0].main}</span>
                  </div>
                </>
              )}
            </>
          )}
        </RightDiv>
      </NextForecastContainer>
    </>
  );
};

export default NextForecast;

import React from "react";
import {
  TodayForecastContainer,
  Title,
  HourlyForecast,
  HourlyForecastContainer,
  Div,
  Image,
} from "./today-forecast.styles";

const TodayForecast = ({ currentWeatherData, isLoading }) => {
  let hourlyData = [];

  if (currentWeatherData !== null) {
    hourlyData = currentWeatherData.hourly.filter((_, i) => i < 5);
  }

  // if (!currentWeatherData) return null;

  return (
    <TodayForecastContainer>
      <Title>Today's forecast</Title>
      <HourlyForecastContainer>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {currentWeatherData && (
              <>
                {hourlyData.map((data, i) => {
                  const time = new Date(data.dt * 1000)
                    .toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                    .toLowerCase();

                  return (
                    <HourlyForecast key={i}>
                      <Div>{Math.round(data.temp)}&deg;C</Div>
                      <Div>
                        <Image
                          src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
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
        )}
      </HourlyForecastContainer>
    </TodayForecastContainer>
  );
};

export default TodayForecast;

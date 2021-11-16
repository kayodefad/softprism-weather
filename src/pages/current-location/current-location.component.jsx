import React, { useState, useEffect } from "react";
import NextForecast from "../../components/next-forecast/next-forecast.component";
import SearchBar from "../../components/searchbar/searchbar.component";
import TodayForecast from "../../components/today-forecast/today-forecast.component";
import axios from "axios";
import { BASE_URL, API_KEY } from "../../config.json";
import { CurrentLocationContainer } from "./current-location.styles";

const CurrentLocation = () => {
  const [location, setLocation] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get("http://ip-api.com/json/");
        setLocation(`${data.city}, ${data.country}`);

        const { data: currentWeather } = await axios.get(
          `${BASE_URL}onecall?lat=${data.lat}&lon=${data.lon}&units=metric&appid=${API_KEY}`
        );

        setCurrentWeatherData(currentWeather);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <CurrentLocationContainer>
      <SearchBar disabled isLink location={location} />
      <TodayForecast
        currentWeatherData={currentWeatherData}
        isLoading={isLoading}
      />
      <NextForecast
        currentWeatherData={currentWeatherData}
        location={location}
        isLoading={isLoading}
      />
    </CurrentLocationContainer>
  );
};

export default CurrentLocation;

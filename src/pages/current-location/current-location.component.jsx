import React, { useState, useEffect } from "react";
import axios from "axios";

import NextForecast from "../../components/next-forecast/next-forecast.component";
import SearchBar from "../../components/searchbar/searchbar.component";
import TodayForecast from "../../components/today-forecast/today-forecast.component";
import { BASE_URL, API_KEY } from "../../config.json";
import { CurrentLocationContainer } from "./current-location.styles";

const CurrentLocation = () => {
  const [location, setLocation] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // Using the Geolocation API to get current location
    const locationWatchId = navigator.geolocation.watchPosition(function (
      position
    ) {
      const fetchData = async () => {
        try {
          const { data: currentWeather } = await axios.get(
            `${BASE_URL}onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${API_KEY}`
          );

          setLocation(currentWeather.timezone.split("/")[1]);
          setCurrentWeatherData(currentWeather);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      };

      fetchData();
    });

    // Cleaning up the subscription to the Geolocation API call
    return () => {
      navigator.geolocation.clearWatch(locationWatchId);
    };
  }, []);

  return (
    <CurrentLocationContainer>
      Hello
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

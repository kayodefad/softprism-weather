import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "../../components/searchbar/searchbar.component";
import CustomWeather from "../../components/custom-weather/custom-weather.component";
import ArrowIcon from "../../assets/images/left-arrow-icon.svg";
import { useHistory } from "react-router";
import { BASE_URL, API_KEY } from "../../config.json";
import {
  CustomLocationContainer,
  LeftArrowContainer,
  LeftArrowIcon,
} from "./custom-location.styles";

const CustomLocation = () => {
  const history = useHistory();
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
          setCurrentWeatherData({
            weather: currentWeather.current.weather[0],
            temperature: currentWeather.current.temp,
          });
          setIsLoading(false);
        } catch (e) {
          alert("An error occurred");
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

  const onFormSubmit = async value => {
    if (!value) {
      alert("Enter a location to search");
      return;
    }

    setIsLoading(true);
    try {
      // Querying the openweathermap API with the search term
      const { data } = await axios.get(
        `${BASE_URL}weather?q=${value}&units=metric&appid=${API_KEY}`
      );
      setLocation(`${data.name}, ${data.sys.country}`);
      setCurrentWeatherData({
        weather: data.weather[0],
        temperature: data.main.temp,
      });
      setIsLoading(false);
    } catch (error) {
      alert("An error occurred");
      setIsLoading(false);
    }
  };

  return (
    <CustomLocationContainer>
      <LeftArrowContainer onClick={() => history.push("/")}>
        <LeftArrowIcon src={ArrowIcon} alt="Left Arrow Icon" />
      </LeftArrowContainer>
      <SearchBar onFormSubmit={onFormSubmit} isLoading={isLoading} />
      <CustomWeather
        location={location}
        currentWeatherData={currentWeatherData}
        isLoading={isLoading}
      />
    </CustomLocationContainer>
  );
};

export default CustomLocation;

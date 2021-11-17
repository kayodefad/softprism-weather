import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

import SearchIcon from "../../assets/images/searchIcon.svg";
import {
  SearchBarContainer,
  SearchIconImg,
  Form,
  InputContainer,
  Input,
  Button,
} from "./searchbar.styles";

const SearchBar = ({ isLink, disabled, location, onFormSubmit, isLoading }) => {
  const history = useHistory();

  const inputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const inputText = inputRef.current.value;
    onFormSubmit(inputText);
  };

  const handleButtonClick = e => {
    e.preventDefault();
    history.push("/custom-weather");
  };

  return (
    <SearchBarContainer>
      {/* Only trigger submtting the form if it is not a link */}
      <Form onSubmit={isLink ? null : handleSubmit}>
        <InputContainer>
          <SearchIconImg src={SearchIcon} alt="Search Icon" />
          <Input
            type="text"
            ref={inputRef}
            defaultValue={`${isLink ? location : ""}`}
            disabled={disabled}
            placeholder="Check for the weather in a location"
          />
        </InputContainer>
        {/* Rendering a different button based on weather it is a link or not */}
        {isLink ? (
          <Button onClick={handleButtonClick}>Search</Button>
        ) : (
          <Button disabled={isLoading}>Search</Button>
        )}
      </Form>
    </SearchBarContainer>
  );
};

export default SearchBar;

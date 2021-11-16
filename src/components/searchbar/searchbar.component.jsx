import React, { useEffect, useRef } from "react";
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
  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  const history = useHistory();

  const inputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const inputText = inputRef.current.value;
    if (!inputText) {
      alert("Enter a search term");
      return;
    }
    onFormSubmit(inputText);
  };

  const handleButtonClick = e => {
    e.preventDefault();
    history.push("/page2");
  };

  return (
    <SearchBarContainer>
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

import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 100%;
  height: 45px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
`;

export const InputContainer = styled.div`
  display: inline;
  position: relative;
`;

export const SearchIconImg = styled.img`
  position: absolute;
  left: 25px;
  top: 50%;
  transform: translateY(-50%);
`;

export const Input = styled.input`
  border: none;
  border-radius: 20px 0 0 20px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  width: 75%;
  height: 100%;
  padding: 0 55px 0 55px;
  transform: translateX(10px);
  font-size: 0.9rem;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: #ddd;
    font-size: 0.75rem;
  }
`;

export const Button = styled.button`
  width: 25%;
  height: 100%;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background: #8862fc;
  font-weight: bold;
  color: #ffffff;
  font-size: 0.9rem;
  transform: translateX(-10px);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
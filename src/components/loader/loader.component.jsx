import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  box-shadow: 0 4px 10px 0 rgba(33, 33, 33, 0.15);
  border-radius: 4px;
  height: ${props => props.height || "100%"};
  width: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: ${props => props.height || "100%"};
    width: 150px;
    background: ${props =>
      `linear-gradient(to right, transparent 0%, ${props.color} 50%, transparent 100%)`};
    -webkit-animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    -moz-animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    -ms-animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    -o-animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @-webkit-keyframes load {
    from {
      left: -150px;
    }
    to {
      left: 100%;
    }
  }

  @-moz-keyframes load {
    from {
      left: -150px;
    }
    to {
      left: 100%;
    }
  }

  @-ms-keyframes load {
    from {
      left: -150px;
    }
    to {
      left: 100%;
    }
  }

  @-o-keyframes load {
    from {
      left: -150px;
    }
    to {
      left: 100%;
    }
  }
  
  @keyframes load {
    from {
      left: -150px;
    }
    to {
      left: 100%;
    }
  }
`;

const Loader = ({ color, height }) => {
  return <LoaderContainer color={color} height={height}></LoaderContainer>;
};

export default Loader;

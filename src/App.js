import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";


import CurrentLocation from "./pages/current-location/current-location.component";
import CustomLocation from "./pages/custom-location/custom-location.component";

const AppContainer = styled.div`
  width: 90%;
  max-width: 800px;
  margin: auto;
`;

const App = () => {
  return (
    <AppContainer>
      <Switch>
        <Route path="/page2" component={CustomLocation} />
        <Route path="/" component={CurrentLocation} />
      </Switch>
    </AppContainer>
  );
};

export default App;

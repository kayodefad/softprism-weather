import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import MyLoader from "./components/my-loader/my-loader.component";

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
        <Route path="/custom-weather" component={CustomLocation} />
        <Route path="/loader" component={MyLoader} />
        <Route path="/" component={CurrentLocation} />
      </Switch>
    </AppContainer>
  );
};

export default App;

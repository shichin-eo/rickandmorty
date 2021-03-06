import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import EpisodesList from "./components/EpisodesList";
import Settings from "./components/Settings";
import { darkTheme, lightTheme } from "./themes/themes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Char from "./components/Char";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  font-size: 1rem;
  font-family: sans-serif;
`;

type Props = {
  theme: typeof darkTheme;
};

const Global = createGlobalStyle<Props>`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

const App = () => {
  const [theme, setTheme] = useState("light");
  const [filters, setFilters] = useState<string[]>([]);

  const filtersHandler = (filters: string[]) => {
    setFilters(filters);
  };

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Global />
        <AppWrapper>
          <Settings
            onClick={themeToggler}
            theme={theme}
            filters={filters}
            filtersHandler={filtersHandler}
          />
          <Switch>
            <Route exact path="/">
              <EpisodesList filters={filters} />
            </Route>
            <Route exact path="/episode/:id">
              <EpisodesList filters={filters} />
            </Route>
            <Route exact path="/character/:id">
              <Char />
            </Route>
            <Route path="/" render={() => <div>404</div>}></Route>
          </Switch>
        </AppWrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

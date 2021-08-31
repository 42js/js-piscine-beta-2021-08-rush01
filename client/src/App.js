import React from "react";
import bg from "./image/bg0.jpeg";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./component/View/LoginPage";
import MainPage from "./component/View/MainPage";
import GamePage from "./component/View/GamePage";
import RegisterPage from "./component/View/RegisterPage";

const GlobalStyle = createGlobalStyle`
	html {
		width: 100%;
		height: 100%;
	}
	body {
		background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    	url(${bg});
		width: 100%;
		height: 100%;
		margin: 0;
		font-family: -apple-system, Noto Sans KR, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	#root {
		width: 100%;
		height: 100%;
	}
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/game/:game_id" exact component={GamePage} />
      </Switch>
    </Router>
  );
}

export default App;

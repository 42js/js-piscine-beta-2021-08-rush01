import styled, { createGlobalStyle } from "styled-components";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "../src/pages/LoginPage";
import JoinPage from "../src/pages/JoinPage";

const GlobalStyle = createGlobalStyle`
  html, body, ul, li, input, button, a {
    all: unset;
    list-style: none;
  }

  a, button {
    cursor: pointer;
  }

  body, .App {
    width: 100%;
    height: 100vh;
  }

  body { 
   /*
    background: #0f0c29;
    background: -webkit-linear-gradient(to left, #24243e, #302b63, #0f0c29);
    background: linear-gradient(to left, #24243e, #302b63, #0f0c29);
    */

    background: #0F2027;
    background: -webkit-linear-gradient(to bottom, #2C5364, #203A43, #0F2027);
    background: linear-gradient(to bottom, #2C5364, #203A43, #0F2027);
  }
  
  header {
    font-size: 30px;
    font-family:'HeirofLightBold';
    letter-spacing: 0.15em;
  }

  #root {
    width: 100%;
    height: 100vh;
    color: #fff;
    font-family: 'DOSGothic';
    @font-face {
      font-family: 'HeirofLightBold';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/HeirofLightBold.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: 'DOSGothic';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/DOSGothic.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }
  }
`;

const Header = styled.header`
  text-align: center;
  margin-top: 60px;
`;

function App() {
  return (
    <div className="App">
      <Header>
        <h1>Indian Poker</h1>
      </Header>
      <BrowserRouter>
        <Route path="/" exact component={LoginPage} />
        <Route path="/join" component={JoinPage} />
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}

export default App;

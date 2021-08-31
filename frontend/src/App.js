import React from "react";
import Login from "./components/Login";
import Game from "./components/Game";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Switch>
              <Route exact path='/'><Login /></Route>
              <Route path='/game'><Game /></Route>
              <Route><Login /></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

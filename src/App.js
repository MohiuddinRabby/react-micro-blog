import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Home from "./components/Home/Home";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

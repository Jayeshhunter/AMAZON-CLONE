import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./login";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
            {/* <h1>checkout</h1> */}
          </Route>
          <Route path="/login">
            {/* <h1>login</h1> */}
            <Login />
          </Route>
          {/* This is the default route, */}
          <Route path="/">
            <Header />
            <Home />
            {/* <h1>Home page</h1> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

{
  /* We need React-Router */
}

{
  /* localhost.com/ */
}
{
  /* localhost.com/checkout */
}
{
  /* localhost.com/login */
}
export default App;

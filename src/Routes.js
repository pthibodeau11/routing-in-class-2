import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ShopItem from "./Components/ShopItem";
import { Shop } from "./App";

export default (
  <Switch>
    <Route component={Landing} exact path="/" />
    <Route component={ShopItem} path="/shop/:productId" />
    <Route component={Shop} path="/shop" />
    <Route component={Contact} path="/about/contact" />
    <Route component={About} path="/about" />
    <Route
      render={() => {
        return (
          <div>
            <h1>404 Not Found</h1>
            <h2>Go away</h2>
          </div>
        );
      }}
    />
  </Switch>
);

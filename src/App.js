import React from "react";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import { HashRouter, Link } from "react-router-dom";
import ShopItem from "./Components/ShopItem";
import "./App.css";
import Routes from "./Routes";

export function Shop() {
  return (
    <>
      <h1>Shop now!</h1>
      <Link to="/shop/25">Widget</Link>
      <Link to="/shop/27">Widget 2</Link>
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        {Routes}
      </div>
    </HashRouter>
  );
}

export default App;

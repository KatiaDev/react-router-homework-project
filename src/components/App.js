import React, { useState, useEffect } from "react";
// 👉 STEP 2 - React Router imports (Route, Link and Switch)
import { Link, NavLink, Route, Switch } from "react-router-dom";

// Components used for the different routes
import Home from "./Home";
import ItemsList from "./ItemsList";
import Item from "./Item";

// Dummy data
import data from "../data";

export default function App() {
  const [stock, setStock] = useState(data);

  return (
    <div className="App">
      <nav style={{ listStyle: "none" }}>
        <h1 className="store-header">Emily&apos;s Trinkets</h1>
        <div className="nav-links">
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`/items-list`) */}
          <li>
            <NavLink to="/" style={{ margin: "15px" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/items-list" style={{ margin: "15px" }}>
              Shop
            </NavLink>
          </li>
        </div>
      </nav>

      {/* 👉 STEP 4 - Build a Switch with a Route for each of the components imported at the top */}
      <Switch>
        <Route exact path="/items-list">
          <ItemsList items={stock} />
        </Route>

        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

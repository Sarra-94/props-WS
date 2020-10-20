import React from "react";
import "./App.css";
// Import Constants
import { itemArray } from "./data.js";
// Import of components

import ListItem from "./Components/ListItems/ListItem";
function App() {
  return (
    <div>
      <h2>Workshop Props</h2>
      <ListItem list={itemArray}>
        <div>
          <h3>Workshop Props</h3>
          <h4>Hope you enjoyed it</h4>
        </div>
      </ListItem>
    </div>
  );
}

export default App;

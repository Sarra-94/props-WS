import React from "react";
import "./App.css";
// importing components
import ListItem from "./Component/ListItem/ListItem";
function App() {
  const itemArray = [
    {
      imgSrc: `https://static.lpnt.fr/images/2020/09/12/20729794lpw-20729998-article-lamborghini-jpg_7343426_1250x625.jpg`,
      name: "Car 1",
      price: `1 349,999,999 $`,
    },
    {
      imgSrc: `https://i.pinimg.com/originals/96/f4/77/96f4778477dcc061faa46a7ec463df65.jpg`,
      name: "Ferrari Black",
      price: `7 633,644,999 $`,
    },
    {
      imgSrc: `https://images.lpcdn.ca/924x615/201903/15/1622571-audi-r8-crdit-audi.jpg`,
      name: "audi R8",
      price: `216 245 999$`,
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Workshop Props</h1>
      <ListItem items={itemArray} name="molka">
        <div>
          <h3> hELLO I am children Props</h3>
          <h4>Hope you enjoyed react props workshop</h4>
        </div>
      </ListItem>
    </div>
  );
}

export default App;

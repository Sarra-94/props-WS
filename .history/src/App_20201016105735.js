import React from "react";
import "./App.css";
// importing components
import MainVideo from "./components/mainVideo/mainVideo"
import Suggestion from "./components/suggestion/suggestion"
import Comments from "./components/comments/comments"

function App() {
  return (
    <div className="App">
     <h1>ReactJS workshop </h1>
     <MainVideo/>
     <Comments/>
     <Suggestion/>
    </div>
  );
}

export default App;

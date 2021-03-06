import React from "react";
import "./App.css";
// importing components
import MainVideo from "./components/mainVideo/mainVideo";
import Suggestion from "./components/suggestion/suggestion";
import Comments from "./components/comments/comments";

function App() {
  return (
    <>
      <h1>ReactJS workshop </h1>
      <div style={{display:"flex",justifyContent:"space-around"}}>
        <div>
          <MainVideo />
          <Comments />
        </div>
        <Suggestion />
      </div>
    </>
  );
}

export default App;

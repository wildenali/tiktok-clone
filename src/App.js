import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      {/* app container */}
      {/* videos */}
      <div className="app__videos">
        {/* <Videos /> */}
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;

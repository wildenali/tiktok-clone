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
        <Video
          url="/Videos/contoh2.mp4"
          channel="wildenali"
          description="Wow Epic MERN TOKTOK Clone App"
          song="Hey whatsup cool 3 2 1 clone the door"
          likes={1200}
          messages={120}
          shares={12}
        />
        <Video
          url="/Videos/contoh3.mp4"
          channel="aliwilden"
          description="Wadidaw Odading"
          song="Odading Mang Oleh seperti ironman"
          likes={2250}
          messages={420}
          shares={220}
        />
      </div>
    </div>
  );
}

export default App;

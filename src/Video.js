import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    // if video is playing
    // stop it...
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }

    // otherwise if its not playing
    // play it...
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src="/Videos/contoh2.mp4"
        // type="video/mp4"
      ></video>

      {/* VideoFooter */}
      <VideoFooter />

      {/* VideoSIdebar */}
      <VideoSidebar likes={3200} shares={140} messages={350} />
    </div>
  );
}

export default Video;

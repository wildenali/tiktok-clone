import React, { useRef } from "react";
import "./Video.css";

function Video() {
  const videoRef = useRef(null);

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        ref={videoRef}
        src="/Videos/contoh2.mp4"
        type="video/mp4"
        controls
      ></video>

      {/* VideoFooter */}

      {/* VideoSIdebar */}
    </div>
  );
}

export default Video;

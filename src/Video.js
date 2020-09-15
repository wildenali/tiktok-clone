import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="video">
      <video className="video__player" loop src=""></video>
      <iframe
        className="video__player"
        width="1189"
        height="669"
        src="https://www.youtube.com/embed/QZG1CVhZ3RQ"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      {/* VideoFooter */}

      {/* VideoSIdebar */}
    </div>
  );
}

export default Video;

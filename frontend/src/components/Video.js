import React, { useRef, useEffect } from "react";

const VideoPlayer = ({ videoFile }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.autoplay = true;
    videoElement.controls = false;
  }, []);

  return (
    <video ref={videoRef} src={videoFile} style={{ width: "100%", height: "100%" }} />
  );
};

export default VideoPlayer;

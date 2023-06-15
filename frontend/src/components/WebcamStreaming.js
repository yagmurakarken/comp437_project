import ProgressBar from "@ramonak/react-progress-bar";
import React, { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import io from "socket.io-client";
import './bar.css'
const socket = io("http://localhost:5001"); // Replace with your server URL

const WebcamStreamingComponent = () => {
  const videoRef = useRef(null);
  // const socketRef = useRef(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    console.log("here1");

    let videoTrack = null;

    // Initialize the WebSocket connection
    // socket = socketIOClient("http://127.0.0.1:5001");

    // Access the user's webcam
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;

          // Get the video track from the stream
          videoTrack = stream.getVideoTracks()[0];
        }
      })
      .catch((error) => {
        console.error("Error accessing webcam:", error);
      });

    // Send video frames to the backend in real-time
    const sendVideoFrames = () => {
      console.log("here2");
      if (videoTrack && videoRef.current) {
        console.log("Sending video frames");
        const imageCapture = new ImageCapture(videoTrack);
        const frameRate = 1; // Adjust the frame rate as needed
        imageCapture
          .grabFrame()
          .then((imageBitmap) => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = imageBitmap.width;
            canvas.height = imageBitmap.height;
            ctx.drawImage(imageBitmap, 0, 0);

            const imageData = canvas.toDataURL("image/jpeg", 0.8);
            socket.emit("videoFrame", imageData);
          })
          .catch((error) => {
            console.error("Error capturing video frame:", error);
          })
          .finally(() => {
            // Schedule the next frame
            setTimeout(sendVideoFrames, 1000 / frameRate);
          });
      }
    };

    // Start sending video frames once the video track is available
    setTimeout(() => sendVideoFrames(), 2000);

    // Clean up the resources
    // return () => {
    //   if (videoRef.current) {
    //     videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
    //   }
    //   if (socket) {
    //     socket.disconnect();
    //   }
    // };
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.on("analysis_result", ({ result }) => {
      setResult(result);
    });
  }, []);

  const barClassNames = (value) => {
    if (value < 50) return "_50";
    if (value < 75) return "_75";
    if (value <= 100) return "_100";
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: "100%", height: "100%" }}
      />
      <div>
        <ProgressBar completed={result} completedClassName={"bar " + barClassNames(result)} />
      </div>
    </div>
  );
};

export default WebcamStreamingComponent;

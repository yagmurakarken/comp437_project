import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5001"); // Replace with your server URL

function Test() {
  const [result, setResult] = useState("");

  useEffect(() => {
    // Listen for the 'analysis_result' event from the backend
    socket.on("analysis_result", ({ result }) => {
      setResult(result);
    });

    // Clean up the event listener
    return () => {
      socket.off("analysis_result");
    };
  }, []);

  const handleAnalyze = () => {
    // Prepare the data to send
    const data = {
      // Data to be sent to the backend
      // ...
    };

    // Emit the 'analyze' event to the backend
    socket.emit("analyze", data);
  };

  return (
    <div>
      <button onClick={handleAnalyze}>Analyze</button>
      <div>{result}</div>
    </div>
  );
}

export default Test;

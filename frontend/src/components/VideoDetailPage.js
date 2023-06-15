import React, { useRef, useState } from 'react';
import './videoDetailPage.css';

const VideoDetailPage = ({ videoFile1, videoFile2 }) => {
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const [video1Time, setVideo1Time] = useState(0);
    const [video2Time, setVideo2Time] = useState(0);

    const handleStart = () => {
        videoRef1.current.play();
        videoRef2.current.play();
    };

    const handleStop = () => {
        videoRef1.current.pause();
        setVideo1Time(videoRef1.current.currentTime);
        videoRef1.current.currentTime = 0;
        videoRef2.current.pause();
        setVideo2Time(videoRef2.current.currentTime);
        videoRef2.current.currentTime = 0;
    };

    const handleResume = () => {
        videoRef1.current.currentTime = video1Time;
        videoRef1.current.play();
        videoRef2.current.currentTime = video2Time;
        videoRef2.current.play();
    };

    return (
        <div>
            <div className="video-container">
                <div className="video-wrapper">
                    {/* Display the first video here */}
                    <video ref={videoRef1} src={videoFile1} controls autoPlay className="video" />
                </div>
                <div className="video-wrapper">
                    {/* Display the second video here */}
                    <video ref={videoRef2} src={videoFile2} controls autoPlay className="video" />
                </div>
            </div>
            <div className="controls" style={{ paddingLeft: '100px' }}>
                <button className="video-button" onClick={handleStart}>
                    Start
                </button>
                <button className="video-button" onClick={handleStop}>
                    Stop
                </button>
                <button className="video-button" onClick={handleResume}>
                    Resume
                </button>
            </div>
        </div>
    );
};

export default VideoDetailPage;







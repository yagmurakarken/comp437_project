import React from 'react';
import { Link } from 'react-router-dom';

const VideoList = () => {
    const videos = [
        { id: 1, title: 'Video 1', url: '/videos/video1.mp4' },
        { id: 2, title: 'Video 2', url: '/videos/video2.mp4' },
        { id: 3, title: 'Video 3', url: '/videos/video3.mp4' },
    ];

    return (
        <div>
            <h1>Video List</h1>
            <ul>
                {videos.map((video) => (
                    <li key={video.id}>
                        <Link to={`/video/${video.id}`}>{video.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VideoList;



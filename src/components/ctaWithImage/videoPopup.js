import React, { useState } from "react";

const VideoPopup = ({ src, thumb, show, hide }) => {
    const [play, setPlay] = useState(false);
    const closePopup = () => {
        setPlay(false);
        hide(false);
    }
    return (
        <div className={`videoPopup ${show && 'show'}`}>
            <div className="overlay" onClick={closePopup}></div>
            <div className="video-box">
                <div className={`videoOverlay ${play && 'hide'}`} onClick={() => setPlay(true)}>
                    <img src={thumb} alt="thumbnail" />
                    <span className="play-icon"></span>
                </div>
                <iframe
                    width="560"
                    height="315"
                    src={play ? src + '?autoplay=1' : src}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="video"
                ></iframe>
            </div>
        </div>
    );
};

export default VideoPopup;

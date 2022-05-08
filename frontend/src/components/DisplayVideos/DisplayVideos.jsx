import React from "react";
import { Link } from "react-router-dom";

const DisplayVideos = ({videos}) => {

    return ( 
        <div>DISPLAY
            {videos.map((video, index) => {
                // get video id
                return (
                    <div style={{'margin-bottom': '80px'}}>
                        <div key={index}>
                             <img src={video.snippet.thumbnails.medium.url} alt="" />
                        </div>
                        <div className="display-title">
                            <h1>{video.snippet.title}</h1>
                        </div>
                        <div>
                            <p>{video.snippet.description}</p>
                        </div>
                        <Link to={`/video/${video.id.videoId}`}>Go To Video</Link>
                    </div>
                );
            })}
        </div>
    );
}
 
export default DisplayVideos;


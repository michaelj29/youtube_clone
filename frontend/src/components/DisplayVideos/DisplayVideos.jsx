import React from "react";
import { Link } from "react-router-dom";
import "./DisplayVideos.css"


const DisplayVideos = ({videos}) => {

    return ( 
        <div class="flex-container">
            {videos.map((video, index) => {
                // get video id
                return (
                    <div className="flex-item">
                        <Link to={`/video/${video.id.videoId}`} >
                            <div key={index}  >
                                <img src={video.snippet.thumbnails.medium.url} alt="" />
                            </div>
                            <div >
                                <h6>{video.snippet.title}</h6>
                            </div> 
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}
 
export default DisplayVideos;


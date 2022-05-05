import React from "react";
import { Link } from "react-router-dom";

const DisplayVideos = ({videos}) => {

    return ( 
        <div>DISPLAY
            {videos.map((video) => {
                // get video id
                const videoId = video.id.videoId
                return (
                    <div>
                        <div>
                             <img src={video.snippet.thumbnails.medium.url} alt="" />
                        </div>
                        <div>
                            <h1>{video.snippet.title}</h1>
                        </div>
                        <div>
                            <p>{video.snippet.description}</p>
                        </div>
                        {/* Link to video page, passing in the videoId as a URL param */}
                        <Link to={`/video/${videoId}`}>Go To Video</Link>
                    </div>
                );
            })}
        </div>
    );
}
 
export default DisplayVideos;


// www.whatever.com/video/2304730247 <-- url param
// www.whatever.com/video/2304730247?searchString="test_search" <---- query param

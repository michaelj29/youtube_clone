import React from "react";
import { Link } from "react-router-dom";

const DisplayVideos = ({videos}) => {

    return ( 
        <div>DISPLAY
            {videos.map((video) => {
                return (
                    <div>
                        <div>
                        <Link to={"/searchResults"}>
                             <img src={video.snippet.thumbnails.default.url} alt="" />
                        </Link>
                        </div>
                        <div>
                            <h1>{video.snippet.title}</h1>
                        </div>
                        <div>
                            <p>{video.snippet.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
 
export default DisplayVideos;
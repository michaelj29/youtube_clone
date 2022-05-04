import React from "react";

const DisplayVideos = ({videos}) => {
    return ( 
        <div>DISPLAY
            {videos.map((video) => {
                return (
                    <div>
                        <div>
                            <img onClick={video.snippet.videoId} src={video.snippet.thumbnails.default.url} alt="" />
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
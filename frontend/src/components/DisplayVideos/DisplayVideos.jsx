import React from "react";

const DisplayVideos = (props) => {
    return ( 
        <div>DISPLAY
            {props.videos.map((video) => {
                <div>
                    <div>
                        <img src={video.snippet.thumbnails.default.url} alt="" />
                    </div>
                    <div>
                        <h1>{video.snippet.title}</h1>
                    </div>
                    <div>
                        <p>{video.snippet.description}</p>
                    </div>
                </div>
            })}
        </div>
    );
}
 
export default DisplayVideos;
import React from "react";
import { Link } from "react-router-dom";


const DisplayVideos = ({videos}) => {

    return ( 
        <div >
            {videos.map((video, index) => {
                // get video id
                return (
                    <div  style={{'margin-bottom': '80px'}}>
                        <Link to={`/video/${video.id.videoId}`}>
                            <div key={index}>
                                <img src={video.snippet.thumbnails.medium.url} alt="" />
                            </div>
                            <div>
                                <div >{video.snippet.title}</div>
                            </div> 
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}
 
export default DisplayVideos;


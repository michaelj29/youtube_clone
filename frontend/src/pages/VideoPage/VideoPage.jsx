import { useEffect } from "react";
import { useParams } from "react-router-dom";

const VideoPage = () => {
    const params = useParams()


    // now that you have the id from the url,make a get request ot get the video link
    const videoId = params && params.videoId

    return ( 
        <div>
            Video Id: {videoId}

            This is the video page

        </div>
     );
}
 
export default VideoPage;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { KEY } from "../../localKey"
import axios from "axios";
import { Link } from "react-router-dom";

const VideoPage = () => {
    const params = useParams()
    const [videos, setVideos] = useState([]);

    // now that you have the id from the url,make a get request ot get the video link
    const videoId = params && params.videoId
    
    useEffect(() => {
        const fetchVideos = async () => {
          try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${KEY}&part=snippet&type=video&relatedToVideoId=${videoId}`, {
            });
            console.log(response.data.items)
            setVideos(response.data.items);
          } catch (error) {
            console.log(error.message);
          }
        };
         fetchVideos();
      }, [videoId]);

    return ( 
        <div>
            <iframe 
            id="ytplayer" 
            type="text/html" 
            width="640" 
            height="360"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
            frameBorder="0">
  </iframe>
         <div>
             Related Videos Go Here
             {videos.map((video) => {
               
                return (
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
                        <Link to={`/video/${video.id.videoId}`}>Go To Video</Link>
                    </div>
                );
            })}
         </div>

        </div>
        
     );
}
 
export default VideoPage;
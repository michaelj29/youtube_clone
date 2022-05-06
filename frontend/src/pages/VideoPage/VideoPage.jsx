import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { KEY } from "../../localKey"
import axios from "axios";
import { Link } from "react-router-dom";


const VideoPage = () => {
    const { videoId, title, description } = useParams()
    const [videos, setVideos] = useState([]);




    console.log(videoId)
    
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
           <h3>{title}</h3>
           <p>{description}</p>
          </div>
         <div>
             Related Videos Go Here
             {videos.map((video) => {
               if(video.snippet){
                 
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
                         <Link to={`/video/${video.id.videoId}/${video.snippet.title}/${video.snippet.description}`}>Go To Video</Link>
                     </div>
                 );
               } else {
                 return null;
               }
            })}
         </div>

        </div>
        
     );
}
 
export default VideoPage;
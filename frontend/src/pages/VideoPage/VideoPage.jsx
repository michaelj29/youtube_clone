import { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";
import { KEY } from "../../localKey"
import axios from "axios";
import AddComment from "../../components/AddComment/AddComment";
import DisplayComments from "../../components/DisplayComments/DisplayComments";

const VideoPage = () => {
    const { videoId } = useParams()
    const [relatedVideos, setRelatedVideos] = useState([]);
    const [title, setTitle] = useState('Video Title')
    const [description, setDescription] = useState('Video Description')

    console.log(videoId)
    useEffect(() => {
      const fetchVideo = async () => {
        try {
          let response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${KEY}&id=${videoId}&part=snippet`, {
          });
          setDescription(response.data.items[0].snippet.description)
          setTitle(response.data.items[0].snippet.title)
        } catch (error) {
          console.log(error.message);
        }
      };
       fetchVideo();
    }, [videoId]);
 
    useEffect(() => {
        const fetchRelatedVideos = async () => {
          try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${KEY}&part=snippet&maxResults=3&type=video&relatedToVideoId=${videoId}`, {
            });
            setRelatedVideos(response.data.items);
          } catch (error) {
            console.log(error.message);
          }
        };
         fetchRelatedVideos();
      }, [videoId]);

    return ( 
        <div>
            <iframe 
            id="ytplayer" 
            title="MyPlayer"
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
          <DisplayComments videoId={videoId}/>
          <AddComment videoId={videoId}/>
         <div>
             {relatedVideos.map((video, index) => {
               if(video.snippet){
                 
                 return (
                     <div key={index} style={{'margin-bottom': '80px'}}>
                         <Link to={`/video/${video.id.videoId}`}>
                          <div>
                              <img src={video.snippet.thumbnails.default.url} alt="" />
                          </div>
                          <div>
                              <h1>{video.snippet.title}</h1>
                          </div>
                         </Link>
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
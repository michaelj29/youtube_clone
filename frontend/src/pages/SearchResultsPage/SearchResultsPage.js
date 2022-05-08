import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const SearchResultsPage = (props) => {
    const {search} = useParams()

    return ( 
        <div>
         <div>
             {props.videos.map((video) => {

                return (
                    <div style={{'margin-bottom': '80px'}}>
                        <div>
                        <img src={video.snippet.thumbnails.medium.url} alt="" />
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
 
export default SearchResultsPage;
import React, { useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';

const SearchResultsPage = (props) => {
    const {search} = useParams()



    useEffect(() => {

      }, []);


    return ( 
        <div>
         <div>
             Related Videos Go Here
             {props.videos.map((video) => {

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
                        <Link to={`/video/${video.id.videoId}/${video.snippet.title}`}>Go To Video</Link>
                    </div>
                );
            })}
         </div>

        </div>
     );
}
 
export default SearchResultsPage;
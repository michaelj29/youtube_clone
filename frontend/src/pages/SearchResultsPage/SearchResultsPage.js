import React from 'react';
import { Link} from 'react-router-dom';
import "./SearchResultsPage.css"

const SearchResultsPage = (props) => {
    

    return ( 
        <div>
         <div className="flex-container">
             {props.videos.map((video) => {

                return (
                    <div className="flex-item">
                        <Link to={`/video/${video.id.videoId}`}>
                            <div>
                                <img src={video.snippet.thumbnails.medium.url} alt="" />
                            </div>
                            <div>
                                <h6>{video.snippet.title}</h6>
                            </div>
                        </Link>
                    </div>
                );
            })}
         </div>

        </div>
     );
}
 
export default SearchResultsPage;
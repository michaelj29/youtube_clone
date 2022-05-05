import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { KEY } from '../../localKey'

const SearchResultsPage = ({search}) => {

    const [ videos, setVideos ] = useState([])


    useEffect(() => {
        const fetchVideos = async () => {
          try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=${KEY}&part=snippet&type=video&maxResults=2`, {
              // headers: {
              //   Authorization: "Bearer " + token,
              // },
            });
            console.log(response.data.items)
            setVideos(response.data.items);
          } catch (error) {
            console.log(error.message);
          }
        };
         fetchVideos();
      }, []);


    return ( 
        <div>
          {console.log(videos)}
            HERE ARE THE RESULTS
        </div>
     );
}
 
export default SearchResultsPage;
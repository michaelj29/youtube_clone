import React from "react";
import { useEffect, useState } from "react";
import  { KEY } from "../../localKey";
import axios from "axios";
import DisplayVideos from "../../components/DisplayVideos/DisplayVideos";

const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${KEY}&part=snippet&type=video&maxResults=5`)
        console.log(response.data.items)
        setVideos(response.data.items);
      } catch (error) {
        console.log(error.message);
      }
    };
     fetchVideos();
  }, []);
  return (
      <DisplayVideos videos={videos} />
  );
};

export default HomePage;

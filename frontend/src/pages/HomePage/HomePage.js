import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { KEY } from "../../localKey";

import axios from "axios";
import DisplayVideos from "../../components/DisplayVideos/DisplayVideos";

const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=cats&key=${KEY}&part=snippet&type=video&maxResults=5`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setVideos(response.data.items);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchVideos();
  }, [token]);
  return (
      <DisplayVideos videos={videos} />
  );
};

export default HomePage;

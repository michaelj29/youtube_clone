import axios from "axios";
import React, { useState, useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import { useParams} from "react-router-dom";

const DisplayComments = () => {
  const { videoId } = useParams()
    const [displayComment, setDisplayComment] = useState([]);
    const [user, token] = useAuth();

    useEffect(() => {
      const fetchComments = async () => {
        try {
          let response = await axios.get(`http://127.0.0.1:8000/api/comments/${videoId}/`,{
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          setDisplayComment(response.data)
          console.log(response.data)
        } catch (error) {
          console.log(error.message);
        }};
       fetchComments();
    }, [setDisplayComment]);

    return ( 
      <div>
        <h3>Comment Section</h3>
        {displayComment.map((comment, index) => {
                return (
                    <div>
                        <div key={index}>

                             <h3>{comment.user.username}</h3>
                        </div>
                        <div>
                            <h3>Text</h3>
                            <p>{comment.text}</p>
                        </div>
                        <div>
                            <p>Likes : {comment.likes}</p>
                            <button>Like</button>
                            <p>Dislikes: {comment.dislikes}</p>
                            <button>Dislike</button>
                        </div>
                    </div>
                );
            })}
      </div>
     );
}
 
export default DisplayComments;
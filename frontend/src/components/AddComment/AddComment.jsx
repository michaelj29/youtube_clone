import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useParams} from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const AddComment = () => {
    const { videoId } = useParams()
    const [comment, setComment] = useState("");
    const [user, token] = useAuth();
    

    async function handleSubmit(event){
        event.preventDefault();
        let videoComment = {
          video_id: videoId,
          text: comment 
        }
        console.log(videoId)
        console.log(videoComment)
        try {
          let response = await axios.post('http://127.0.0.1:8000/api/comments/', videoComment ,{
            headers: {
              Authorization: "Bearer " + token,
            },
          });
        } catch (error) {
          console.log(error.message);
        }
    }


    return ( 
        <form onSubmit={handleSubmit}>
        <div className='content'>
            <label className='post-label'>Post</label>

            <textarea className='post-input' rows='10' cols="10" value={comment} onChange={(event) => setComment(event.target.value)}/>
            <button className='submit-button' type='submit'>Create</button>
        </div>
    </form>
     );
}
 
export default AddComment;
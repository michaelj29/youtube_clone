import axios from "axios";
import React, { useState, useEffect } from 'react';


import useAuth from "../../hooks/useAuth";


const AddComment = (props) => {
    const [comment, setComment] = useState("");
    const [user, token] = useAuth();

    function handleSubmit(event){
        event.preventDefault();

    }

    useEffect(() => {
        const addComment = async () => {
          try {
            let response = await axios.post(`http://127.0.0.1:8000/api/comments/`, {
              headers: {
                Authorization: "Bearer " + token,
              },
            });
            console.log(response.data.items)
            setComment(response.data.items);
          } catch (error) {
            console.log(error.message);
          }
        };
         addComment();
      }, []);


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
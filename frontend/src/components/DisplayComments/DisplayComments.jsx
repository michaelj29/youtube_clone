import axios from "axios";
import React, { useState } from 'react';



const DisplayComments = ({videoId}) => {

    // const [displayComment, setDisplayComment] = useState("");
    // const [user, token] = useAuth();

    // async function DisplayCommentsList(event){
    //     event.preventDefault();
    //     let displayVideoComments = {
    //       video_id: JSON.stringify(videoId),
    //       text: comment 
    //     }
    //     console.log(displayVideoComments)
    //     try {
    //       let response = await axios.post('http://127.0.0.1:8000/api/comments/', displayVideoComments ,{
    //         headers: {
    //           Authorization: "Bearer " + token,
    //         },
    //       });
    //     } catch (error) {
    //       console.log(error.message);
    //     }
    // }


    return ( 
        <h3>Comment Section</h3>
     );
}
 
export default DisplayComments;
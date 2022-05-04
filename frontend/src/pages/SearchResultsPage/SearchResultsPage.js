import React, { useState } from 'react';
import DisplayVideos from '../../components/DisplayVideos/DisplayVideos';
import { useEffect, useState } from "react";

const SearchResultsPage = () => {



    return ( 
        <div>
            Your search Results Below
            <DisplayVideos videos={videos}/>

        </div>
     );
}
 
export default SearchResultsPage;
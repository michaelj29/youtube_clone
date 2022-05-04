// Home Page 
    //TO DISPLAY 5 RANDOM VIDEOS TO HOMEPAGE USER IS LOGGED OUT
        //STEPS: 
        // Get the Videos to Display:
            //Make a GET Request through axios 
            //Map out the GET Request 
            //Pass in the DisplayVideos Component the five random videos 
        //Make the Videos clickable 
            //User will be taken to another page (Individual Video page without comments or Search Results Page)

    //SearchBar Functionality
        //Search the youtube database via GET Request
        //GET request will return items based on the search event
        //The user will be taken to the Search Results Page
            
    //Search Results Page
         // Get the Videos to Display based on our Search Results:
            //Make a GET Request through axios 
            //Map out the GET Request 
            //Pass in the DisplayVideos Component the five related videos 
        //Make the Videos clickable 
            //User will be taken to another page (Individual Video page without comments)       
    
    //Individual Video Page USER LOGGED OUT
        //Display Chosen Video
            //GET Request for specific video using the video_Id 
        //Display related Videos 
            //Get Request for related videos 
            //Map out the Get Request for related videos 
            //Make related videos clickable



            
            // const [searchResults, setSearchResults] = useState([]);
            // const [videos, setVideos] = useState([]);
          
            // useEffect(() => {
            //     getSearchResults()
            // }, [])
          
            // async function getSearchResults(searchTerm ='lofi music'){
            //         let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&type=video&maxResults=2`);
            //         setSearchResults(response.data.items);
            //       } 
          
          
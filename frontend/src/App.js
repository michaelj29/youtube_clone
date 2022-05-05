// General Imports
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { useState } from "react";

import axios from "axios";
// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from './pages/VideoPage/VideoPage'

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
import { KEY } from './localKey'

function App() {
  const [ videos, setVideos ] = useState([])
  const navigate = useNavigate()

  
  const fetchVideos = async (searchTerm) => {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&type=video&maxResults=2`, {
        // headers: {
        //   Authorization: "Bearer " + token,
        // },
      });
      console.log(response.data.items)
      setVideos(response.data.items);
      navigate("searchResults")

    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <Navbar search={fetchVideos} />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/searchResults" element={<SearchResultsPage videos={videos} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video/:videoId" element={<VideoPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

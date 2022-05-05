// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";


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

function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/searchResults" element={<SearchResultsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video/:videoId" element={<VideoPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

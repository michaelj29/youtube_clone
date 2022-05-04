// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
      getSearchResults()
  }, [])

  async function getSearchResults(searchTerm ='lofi music'){
          let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&type=video&maxResults=2`);
          setSearchResults(response.data.items);
        } 


  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            // <PrivateRoute>
              <HomePage />
            // </PrivateRoute>
          }
        />
        <Route path="/searchResults" element={<SearchResultsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

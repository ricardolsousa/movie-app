import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./pages/home/HomePage";
import MoviePage from "./pages/movies/MoviePage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div
      className="App"
      style={{
        background: "#3b3b3bf2",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Router>
        <Navbar />
        <div style={{ paddingTop: "80px", flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/movies/:movie_id" element={<MoviePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

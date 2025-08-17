import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import MovieCard from "./Componenets/MovieCard";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Navbar from "./Componenets/Navbar";
import { MovieProvider } from "./Context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
      
    </MovieProvider>
  );
}

export default App;

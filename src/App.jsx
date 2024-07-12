import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Movies from "./Pages/Movies";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/wishlist" element={<Movies />} />
      </Routes>
    </>
  );
};

export default App;

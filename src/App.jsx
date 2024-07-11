import { Route, Routes } from "react-router-dom";
import "./App.css";
import Movies from "./Pages/Movies";
import WishList from "./Pages/WishList";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </>
  );
};

export default App;

import { Navbar } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import logo from "../utilities/logo.png";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <Link to="/">
          <img
            src={logo}
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Link>
      </Navbar.Brand>
      <SearchBar />
      <Navbar.Text>
        <Link to="/wishList">
          <FaHeart className="me-2" /> My WishList
        </Link>
      </Navbar.Text>
    </Navbar>
  );
};

export default NavBar;

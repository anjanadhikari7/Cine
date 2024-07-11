import { Col, Row } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { wishList } = useSelector((state) => state.movie);
  console.log(wishList);
  return (
    <Row className="justify-content-center mb-4">
      <Col xs={12} md={10} className="d-flex justify-content-between">
        <div className="header d-flex justify-content-center flex-grow-1">
          <SearchBar />
        </div>
        {wishList.length > 0 && (
          <div className="d-flex align-items-center ms-3">
            <Link
              to="/WishList"
              className="text-light d-flex align-items-center"
            >
              <FaHeart className="me-2" /> My WishList
            </Link>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default NavBar;

import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import NavBar from "../Components/NavBar";

const Movies = () => {
  return (
    <>
      <NavBar />
      <Container fluid className="p-4 subtle-container">
        <Row className="my-4">
          <Col>
            {isLoading && (
              <Button variant="warning" disabled>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </Button>
            )}
            {!isLoading && (
              <Card className="shadow-sm mb-4 bg-light">
                <Card.Body>
                  <Row>
                    <Col md={4}>
                      <MovieCard movie={searchedMovie} />
                    </Col>
                    <Col
                      md={8}
                      className="d-flex flex-column justify-content-between"
                    >
                      <AddToWishList
                        movie={searchedMovie}
                        addMovieToWishList={addMovieToWishList}
                        wishList={wishList}
                        handleOnDiscard={handleOnDiscard}
                      />
                      <Button
                        variant="info"
                        className="mt-3"
                        onClick={handleNextMovie}
                      >
                        Next Similar Movie
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Movies;

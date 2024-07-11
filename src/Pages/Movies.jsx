import { useDispatch, useSelector } from "react-redux";
import {
  NOW_PLAYING_URL,
  POPULAR_MOVIES_URL,
  TOP_MOVIES_URL,
  TRENDING_MOVIES_URL,
  UPCOMING_MOVIES_URL,
} from "../apiConfig";
import { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import MovieSection from "../Components/MovieSection";
import { handleMovieClickAction } from "../Redux/MovieAction";
const dispatch = useDispatch();

const Movies = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const { wishList, searchMovie, similarMovie, isLoading } = useSelector(
    (state) => state.movie
  );

  const fetchTMDBMovies = async () => {
    try {
      const topMoviesRes = await axios.get(TOP_MOVIES_URL);
      setTopMovies(topMoviesRes.data.results);

      const popularMoviesRes = await axios.get(POPULAR_MOVIES_URL);
      setPopularMovies(popularMoviesRes.data.results);

      const nowPlayingRes = await axios.get(NOW_PLAYING_URL);
      setNowPlaying(nowPlayingRes.data.results);

      const upcomingMoviesRes = await axios.get(UPCOMING_MOVIES_URL);
      setUpcomingMovies(upcomingMoviesRes.data.results);

      const trendingMoviesRes = await axios.get(TRENDING_MOVIES_URL);
      setTrendingMovies(trendingMoviesRes.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleMovieClick = async (movieID) => {
    dispatch(handleMovieClickAction(movieID));
  };
  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  useEffect(() => {
    fetchTMDBMovies();
  }, []);

  return (
    <>
      <Container fluid>
        {searchMovie.id && (
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
                <div>
                  <Card className="shadow-sm mb-4 bg-light movie-card">
                    <Card.Body>
                      <Row>
                        <Col>
                          <MovieCard
                            movie={searchedMovie}
                            onClick={handleMovieClick}
                            addMovieToWishList={addMovieToWishList}
                            wishList={wishList}
                          />
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>

                  {similarMovie.length > 0 && (
                    <MovieSection
                      title="Similar Movies"
                      movies={similarMovie}
                      onMovieClick={handleMovieClick}
                    />
                  )}
                </div>
              )}
            </Col>
          </Row>
        )}

        <MovieSection
          title="Top Rated Movies"
          movies={topMovies}
          onMovieClick={handleMovieClick}
        />
        <MovieSection
          title="Popular Movies"
          movies={popularMovies}
          onMovieClick={handleMovieClick}
        />
        <MovieSection
          title="Now Playing"
          movies={nowPlaying}
          onMovieClick={handleMovieClick}
        />
        <MovieSection
          title="Upcoming Movies"
          movies={upcomingMovies}
          onMovieClick={handleMovieClick}
        />
        <MovieSection
          title="Trending Movies"
          movies={trendingMovies}
          onMovieClick={handleMovieClick}
        />
      </Container>
    </>
  );
};

export default Movies;

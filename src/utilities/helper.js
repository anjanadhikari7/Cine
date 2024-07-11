import { MOVIE_CREDITS_URL, MOVIE_DETAILS_URL } from "../apiConfig";

export const fetchMovieDetails = async (movieId) => {
  try {
    const movieDetails = await axios.get(MOVIE_DETAILS_URL(movieId));
    const movieCredits = await axios.get(MOVIE_CREDITS_URL(movieId));

    const director = movieCredits.data.crew.find(
      (person) => person.job === "Director"
    );
    const cast = movieCredits.data.cast.slice(0, 6);

    return {
      ...movieDetails.data,
      director: director ? director.name : "N/A",
      cast: cast.map((actor) => actor.name).join(", "),
    };
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
};

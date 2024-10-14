import axios from "axios";
import { useState, useEffect } from "react";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
  );
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2M4ZWU5YTQxM2RjZmYzZjBiMmQ1MGQ0OTliYzYyNCIsIm5iZiI6MTcyODkwNDM1OS43NjMxMzgsInN1YiI6IjY3MGNmYmY1MWNhNGMzOWZkZWViOTcxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rkT3MA9eqsLB13Sij0kB8iLolZsW_GnOkpreMS58Gjw",
    },
  };
  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
    setURL();
  };
  const handleNextPage = () => {
    setPage(page + 1);
    setURL();
  };
  const setURL = () => {
    setUrl(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`
    );
  };
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url, options)
      .then((response) => {
        setMovies(response.data.results); // Extract the results array from the response
        setIsError(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page]);

  return (
    <div>
      <h3 className="text-5xl text-center mb-10 font-mono font-extrabold">
        Popular Movies
      </h3>
      {isError && <p>{error}</p>}
      {isLoading ? (
        <p className="text-5xl text-red-800 font-extrabold">Loading...</p>
      ) : (
        <ul className=" grid grid-cols-1 sm:grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
          {movies.map((movie) => (
            <a href={`/movies/${movie.id}`} key={movie.id}>
              <li className="bg-slate-800 rounded-2xl overflow-hidden">
                <div className=" text-white">
                  <div className="overflow-hiddens3">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="w-full  hover:scale-105 s3"
                    />
                  </div>
                  <div className="flex flex-col gap-5 p-5">
                    <h2 className="text-4xl md:text-2xl text-ellipsis font-bold">
                      {movie.title}
                    </h2>
                    <p className="text-2xl md:text-xl">
                      <span className=" font-bold">Rating:</span>
                      {movie.vote_average}
                    </p>
                  </div>
                </div>
              </li>
            </a>
          ))}
        </ul>
      )}

      <div className="flex gap-5 justify-center mt-10">
        <a href="#">
          <button
            className="bg-orange-800 text-white rounded-full p-5 px-10 text-xl font-extrabold "
            onClick={handlePreviousPage}
          >
            PREV
          </button>
        </a>
        <a href="#">
          <button
            className="bg-orange-800 text-white rounded-full p-5 px-10 text-xl font-extrabold "
            onClick={handleNextPage}
          >
            NEXT
          </button>
        </a>
      </div>
    </div>
  );
}

export default MoviesList;

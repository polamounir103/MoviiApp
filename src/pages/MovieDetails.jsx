import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  console.log(id);
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  //   const [url, setUrl] = useState(
  //     `https://api.themoviedb.org/3/movie/${movie_id}`
  //   );
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2M4ZWU5YTQxM2RjZmYzZjBiMmQ1MGQ0OTliYzYyNCIsIm5iZiI6MTcyODkwNDM1OS43NjMxMzgsInN1YiI6IjY3MGNmYmY1MWNhNGMzOWZkZWViOTcxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rkT3MA9eqsLB13Sij0kB8iLolZsW_GnOkpreMS58Gjw",
    },
  };

  useEffect(() => {
    setIsLoading(true);
    const url = `https://api.themoviedb.org/3/movie/${id}`;
    axios
      .get(url, options)
      .then((response) => {
        setMovie(response.data);
        console.log(response);
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
  }, [id]);

  return (
    <div>
      <div className="flex">
        <div className="overflow-hidden ">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full"
          />
        </div>

        <div className="">
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
      </div>
    </div>
  );
}

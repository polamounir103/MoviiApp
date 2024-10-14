// import axios from "axios";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

function Product() {
  // const { id } = useParams();
  // const [product, setProduct] = useState({});
  const [movies, setMovies] = useState([]);


  // useEffect(() => {
  //   axios
  //     .get("/public/DB/products.json")
  //     .then(function (response) {
  //       const productData = response.data.find((pro) => pro.id === id);
  //       setProduct(productData);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, [id]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2M4ZWU5YTQxM2RjZmYzZjBiMmQ1MGQ0OTliYzYyNCIsIm5iZiI6MTcyODkwNDM1OS43NjMxMzgsInN1YiI6IjY3MGNmYmY1MWNhNGMzOWZkZWViOTcxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rkT3MA9eqsLB13Sij0kB8iLolZsW_GnOkpreMS58Gjw",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=5&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);

      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h3 className="text-5xl text-center mb-10 font-mono font-extrabold">
        Popular Movies
      </h3>
      <ul className=" grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="bg-orange-600 rounded-2xl overflow-hidden"
          >
            <div className=" text-white">
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full"
                />
                {/* <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt={movie.title}
                  /> */}
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;

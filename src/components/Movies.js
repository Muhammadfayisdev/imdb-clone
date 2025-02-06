import React, { useEffect, useState } from "react";
import axios from "axios";

function Movies() {
  const [moviesData, setMoviesData] = useState([]);

  const getTrendingMoviesData = () => {
    const API_KEY = `53161c886ff59943b8aa7cc8f3089fd4`;
    axios
      .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then((response) => {
        console.log(response.data.results);
        setMoviesData(response.data.results);
      });
  };
  useEffect(() => {
    getTrendingMoviesData();
  }, []);

  return (
    <>
      <div>
        <div className="text-2xl font-bold text-center">Trending Movies</div>
      </div>
      <div className="flex flex-wrap">
        {
          moviesData.map((movie,index) =>{
            return <div key={index}
            className="w-[160px] h-[30vh] bg-center bg-cover m-4 md:h[40vh] md:w-[180px] rounded-xl hover:scale-110 duration-300"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`,
            }}
          >
            {/* <div className="text-white font-bold text-center w-full bg-gray-900 bg-opacity-60">{movie.original_title}</div> */}
          </div>
          })
        }
      </div>
    </>
  );
}

export default Movies;

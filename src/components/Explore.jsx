import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Explore = () => {
  const [movies, setMovies] = useState([]);

  const handleFetch = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzI5ZDJkMTUwZmNiYzc3Njc0ZDBkNjc2ZDk1YjhlYSIsInN1YiI6IjY2MzhkYTE5MzU4ZGE3MDEyNDU3MDU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Azqgn6XaSFk6bm_f1VN9erageF7gOPgaaQjaSrHB4xs',
        },
      });
      console.log(res.data.results); // Log the actual data
      setMovies(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-auto"
          />
          <div className="p-4">
            <h2 className="text-black text-lg font-semibold mb-2">
              {movie.title}
            </h2>
            <p className="text-gray-700">Release Date: {movie.release_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Explore;

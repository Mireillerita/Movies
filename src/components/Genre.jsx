import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Genre = () => {
  const [genres, setGenres] = useState([]);

  const handleFetch = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/genre/tv/list?language=en',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzI5ZDJkMTUwZmNiYzc3Njc0ZDBkNjc2ZDk1YjhlYSIsInN1YiI6IjY2MzhkYTE5MzU4ZGE3MDEyNDU3MDU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Azqgn6XaSFk6bm_f1VN9erageF7gOPgaaQjaSrHB4xs',
        },
      });
      console.log(res.data);
      setGenres(res.data.genres);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const fetchImagesForGenre = async (genreId) => {
    try {
      const res = await axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/tv?with_genres=${genreId}&language=en`,
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzI5ZDJkMTUwZmNiYzc3Njc0ZDBkNjc2ZDk1YjhlYSIsInN1YiI6IjY2MzhkYTE5MzU4ZGE3MDEyNDU3MDU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Azqgn6XaSFk6bm_f1VN9erageF7gOPgaaQjaSrHB4xs',
        },
      });
      console.log(res.data.results);
      return res.data.results.slice(0, 4); // Limit to 4 TV shows per genre
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const [genreImages, setGenreImages] = useState({});

  useEffect(() => {
    const fetchImages = async () => {
      const images = {};
      for (const genre of genres) {
        const genreId = genre.id;
        const genreImages = await fetchImagesForGenre(genreId);
        images[genreId] = genreImages;
      }
      setGenreImages(images);
    };

    if (genres.length > 0) {
      fetchImages();
    }
  }, [genres]);

  return (
    <div className="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {genres.map((genre) => (
        <div
          key={genre.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <h2 className="text-black text-lg font-semibold mb-2">
            {genre.name}
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {genreImages[genre.id]?.map((show) => (
              <img
                key={show.id}
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.name}
                className="w-full h-auto"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Genre;

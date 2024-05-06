import React from 'react';
import axios from 'axios';
import { useState } from 'react';
const Explore = () => {
  const [response, setResponse] = useState([]);
  const handleFetch = async () => {
    try {
      axios({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
        Headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzI5ZDJkMTUwZmNiYzc3Njc0ZDBkNjc2ZDk1YjhlYSIsInN1YiI6IjY2MzhkYTE5MzU4ZGE3MDEyNDU3MDU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Azqgn6XaSFk6bm_f1VN9erageF7gOPgaaQjaSrHB4xs',
        },
      })
        .then((response) => {
          console.log(response.data.result);
          setResponse(response.data.result);
        })
        .catch((error) => {});
    } catch (error) {
      console.log(error);
    }
  };
  handleFetch();

  return;
  <div></div>;
};
export default Explore;

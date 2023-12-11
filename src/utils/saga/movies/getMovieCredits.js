
import axios from "axios";

export const getMovieCredits = async (movieId) => {
 const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, {
  headers: {
   accept: 'application/json',
   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTNkYzA0NDk2MjU0OTgwZDAxZGE2ZjEyZWNkOGUxZCIsInN1YiI6IjY1NGJiZGEyNDFhNTYxMzM2YzVlZDg2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jjbm7YAkE1x0vuKowvjXJFiE28sDgW1TB_diyZmPKVQ',
  }
 });
 return response.data;
};

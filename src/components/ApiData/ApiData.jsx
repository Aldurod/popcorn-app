//importacion de  React y hook useEffect
import React, { useEffect } from 'react';

const API_KEY = "b4f87f254f7a698ffcf32a29ce959191";
const BASE_URL = "https://api.themoviedb.org";

const ApiData = ({text, onResultsFound}) => {

useEffect (() =>{
  const searchMovies = async () => {
    if (text.trim().length< 3){
      onResultsFound(null);
      return;
    } 
    
const url = `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${text}&language=es-ES`;

    try {
  const response = await fetch (url);
  const data = await response.json ();
  if (data.results && data.results.length > 0) {
    onResultsFound(data.results[0]);
  } 
} catch (error) {
  console.error ("API error:" , error);
}
  };

  const timer = setTimeout(searchMovies, 500);
    return () => clearTimeout(timer);},
    [text, onResultsFound]);

  return null;

};



export default ApiData;

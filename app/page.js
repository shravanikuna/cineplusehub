"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetPopularMovies } from "@/store/Actions/tmdbActions";
import { changepage, removeerrors } from "@/store/Reducers/tmdbReducer";
import Link from "next/link";
import { toast } from "react-toastify";

const HomePage = () => {
  const { movies, page, errors } = useSelector((state) => state.tmdbReducer);
  const dispatch = useDispatch();
  if (errors.length > 0) {
    errors.map((e, i) => {
        toast.error(e);
    });
    dispatch(removeerrors());
}
  console.log(movies);

  useEffect(() => {
    if (movies.length === 0) {
      dispatch(asyncGetPopularMovies());
    }
  }, [movies, dispatch]);

  return (
    <div>
      HomePage
      {/* {data && data.map((d) => {
      return(
        <div key={d.id}>
          <img src="" alt="" />
          <h3>{d.title}</h3>
          <Link href={`/details/${id}`}>Details</Link>
        </div>
      )
    })} */}
      {movies &&
        movies.map((d) => {
          return (
            <div key={d.id}>
              <img
                height={200}
                src={`https://image.tmdb.org/t/p/w500/${d.backdrop_path}`}
                alt=""
              />
              <p>Movie Name:{d.title}</p>
              <Link href={`/details/${d.id}`}>Details</Link>
              <div className=" text-center paginate">
                <button style={{width:'100px', height:'30px', borderRadius:'20px'}} onClick={() => dispatch(changepage(-1))}>
                    Previous
                </button>
                <span className="h1">{page}</span>
                <button style={{width:'100px', height:'30px', borderRadius:'20px'}} onClick={() => dispatch(changepage(1))}>Next</button>
            </div>
            </div>
            
          );
        })}
    </div>
  );
};

export default HomePage;
// FINF API KEY
// https://www.themoviedb.org/settings/api?api_key=YOUR_API_KEY

// API LINKS TO USE
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=YOUR_API_KEY

// image paths
// 

// search
// https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=YOUR_API_KEY
import React from "react";
import MovieCard from "./MovieCard";
// import "../App.css";


function MovieList({list}){
    return(
        <div className="MovieList" style={{}}>{
        list.map( (ele,index)=>(
            <MovieCard key={index} ele={ele} />
        ))
        }
        </div>
    );
}

export default MovieList;
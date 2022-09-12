import { data } from 'autoprefixer';
import { useEffect, useState } from 'react';
import '../index.css';

import {moviesData} from "../data/movies";


const Row = (props) => {

    const [movies, setMovies] = useState([]);

    const { title, movieType } = props;

    useEffect(() => {
        fetchMovies(movieType);
    }, [movieType]);

    const fetchMovies = () => {
        const movies =  moviesData;
        if (movies && movies.length !== 0){
            setMovies(() => movies)
        }
    }

    const mov = moviesData[0]['movies'];

    // console.log(moviesData[0]['movies']);

    return ( 
        <div className="text-white ml-5">
            <h2 className="mt-3 text-lg">{title}</h2>

            <div className="flex overflow-x-scroll overflow-y-hidden py-2 px-0 row__posters">
               
                {mov[movieType].map((movie) => ( 
                    <> 
                        {/* <p>{movieType}</p> */}
                        <img
                            key={movie.id}
                            className="row__poster row__posterLarge"
                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                            alt={movie.original_name}
                        />
                    </>
                    
                ))}
                
            </div>

        </div>
     );
}
 
export default Row;
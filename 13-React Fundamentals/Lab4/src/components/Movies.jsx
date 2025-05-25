import React, { useState, useMemo, useCallback } from 'react';
import GetData from '../Hooks/getData'
import Movie from './Movie';

const Movies = () => {
    const [Loaded, myMovies] = GetData();
    const [minRating, setMinRating] = useState(7);

    const filteredMovies = useMemo(() => {
        console.log('Filtering movies...');
        return myMovies.filter(movie => movie.vote_average >= minRating);
    }, [myMovies, minRating]);

    const handleClick = useCallback((movieTitle) => {
        alert(`You clicked on ${movieTitle}`);
    }, []);

    return !Loaded ? (
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    ) : (
        <div className='p-4'>
            <div className="mb-4">
                <label htmlFor="rating" className='text-white'>Minimum Rating: {minRating}</label> <br />
                <input className='w-75' type="range" id="rating" min="0"
                    max="10" value={minRating} onChange={(e) => setMinRating(Number(e.target.value))}
                />
            </div>
            <div className='d-flex flex-wrap gap-4 justify-content-center'>
                {filteredMovies.map(movie => (
                    <Movie key={movie.id} {...movie} onMovieClick={handleClick}/>
                ))}
            </div>
        </div>
    );
};


export default Movies;

import React from 'react';

const Movie = ({ title,overview, vote_average, poster_path, onMovieClick }) => {
  return (
      <div className="card w-25" onClick={() => onMovieClick(title)} style={{ width: '200px', cursor: 'pointer' }}>
          <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} className="card-img-top" />
          <div className="card-bodys">
              <small>{vote_average}</small>
              <h3 className="card-title">{title}</h3>
              <p>{overview}</p>
          </div>
      </div>
  );
};

export default React.memo(Movie);

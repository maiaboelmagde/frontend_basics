import React from 'react';

const Movie = ({original_title,overview,poster_path}) => {
    return (
            <div style={Styles.innerDiv}>
              <img 
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`} 
                alt={original_title} 
                style={Styles.imgStyle} 
              />
              <div style={{ padding: '15px' }}>
                <h2 style={{ fontSize: '1.2rem', margin: '0 0 10px' }}>{original_title}</h2>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>{overview}</p>
              </div>
            </div>
    );
}

const Styles={
    innerDiv:{width: '500px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#fff' },
    imgStyle:{ width: '100%', height: 'auto' }

}

export default Movie;

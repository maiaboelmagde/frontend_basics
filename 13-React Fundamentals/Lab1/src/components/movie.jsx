import React from 'react';

const Movie = ({name,type,poster}) => {
    return (
            <div style={Styles.innerDiv}>
              <img 
                src={poster} 
                alt={name} 
                style={Styles.imgStyle} 
              />
              <div style={{ padding: '15px' }}>
                <h2 style={{ fontSize: '1.2rem', margin: '0 0 10px' }}>{name}</h2>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>{type}</p>
              </div>
            </div>
    );
}

const Styles={
    innerDiv:{width: '500px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#fff' },
    imgStyle:{ width: '100%', height: 'auto' }

}

export default Movie;

import React from 'react';
import Movie from './movie';

const Movies = () => {
    let myMovies = [
        {
            id:1,
            name: "Spider-Man: Into the Spider-Verse",
            type: "Animation, Action, Adventure",
            poster: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg"
        },
        {
            id:2,
            name: "Coco",
            type: "Animation, Family, Fantasy",
            poster: "https://m.media-amazon.com/images/M/MV5BMDIyM2E2NTAtMzlhNy00ZGUxLWI1NjgtZDY5MzhiMDc5NGU3XkEyXkFqcGc@._V1_.jpg"
        },
        {
            id:3,
            name: "Zootopia",
            type: "Animation, Adventure, Comedy",
            poster: "https://m.media-amazon.com/images/I/71hWkxTBHRL.jpg"
        },
        {
            id:4,
            name: "The Incredibles",
            type: "Animation, Action, Adventure",
            poster: "https://c8.alamy.com/comp/K72WRW/the-incredibles-year-2004-usa-director-brad-bird-animation-movie-poster-K72WRW.jpg"
        },
        {
            id:5,
            name: "How to Train Your Dragon",
            type: "Animation, Action, Adventure",
            poster: "https://m.media-amazon.com/images/I/51uJGH71GsL.jpg"
        },
        {
            id:6,
            name: "Spider-Man: Into the Spider-Verse",
            type: "Animation, Action, Adventure",
            poster: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg"
        },
        
    ];
    

    return (
        <>
            <div style={Styles.addrStyle}>
            Our Movies
            </div>
            <div style={Styles.DivStyle}>
                {myMovies.map((movie)=> <Movie key={movie.id} {...movie}></Movie>)}
            </div>
        </>
    );
}

const Styles={
    addrStyle : {
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
        marginTop: '30px',
        marginBottom: '10px',
        color: '#333',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    },
    DivStyle:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        minHeight: '100vh'
    },
}

export default Movies;

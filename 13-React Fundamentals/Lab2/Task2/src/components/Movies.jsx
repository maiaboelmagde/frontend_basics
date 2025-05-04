import React, { PureComponent } from "react";
import Movie from './movie';
import axios from 'axios';

class Movies extends PureComponent {
  state = {
    myMovies: []
  };

  Styles = {
    addrStyle: {
      textAlign: 'center',
      fontSize: '2rem',
      fontWeight: 'bold',
      marginTop: '30px',
      marginBottom: '10px',
      color: '#333',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    DivStyle: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
      padding: '20px',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh'
    },
  };

  componentDidMount() {
    axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")
      .then(res => {
        this.setState({ myMovies: res.data.results });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        <div style={this.Styles.addrStyle}>
          Our Movies
        </div>
        <div style={this.Styles.DivStyle}>
          {this.state.myMovies.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
        </div>
      </>
    );
  }
}

export default Movies;

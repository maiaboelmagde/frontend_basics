import React,{ useState, useEffect } from 'react';
import axios from 'axios';


const GetData= () => {
    let [isLoaded, setIsLoaded] = useState(false);
    let [data, setData]=useState([]);

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")
      .then(res => {
        console.log('Data is loading');
        setData(res.data.results);
        setIsLoaded(true);
      })
      .catch(err => console.error(err));
    }, []);

    return [isLoaded, data];
}

export default GetData;

'use client'

import React, { useEffect, useState } from 'react';
import RecipeCard from '../../../components/RecipeCard';
import { Spinner } from 'react-bootstrap';

const Page = () => {
  const [recipes, setRecipes] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    
    fetch(process.env.NEXT_PUBLIC_API_LINK, {
      headers: {
        'X-Rapidapi-Key': process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY,
        'X-Rapidapi-Host': process.env.NEXT_PUBLIC_X_RAPIDAPI_HOST
      }
    })
      .then(res => res.json())
      .then(data => {
        setRecipes(data.results);
        setLoaded(true);
      });
  }, []);

  return loaded ? (
    <div className="d-flex flex-wrap g-5 justify-content-center">
      {recipes.map((r) => (
        <RecipeCard key={r.id} name={r.name} thumbnail={r.thumbnail_url} description={r.description} />
      ))}
    </div>
  ) : (
    <div className='d-flex flex-wrap g-5 justify-content-center align-content-centers'>
      <Spinner/>
    </div>
  );
};

export default Page;

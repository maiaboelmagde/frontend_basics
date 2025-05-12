'use client'

import React, { useEffect, useState } from 'react';
import RecipeCard from '../../components/RecipeCard';
import { Spinner } from 'react-bootstrap';

const Page = () => {
  const [recipes, setRecipes] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', {
      headers: {
        'X-Rapidapi-Key': '1aca69dcefmshcb652f90540d8f6p15fedfjsnc190459f3869',
        'X-Rapidapi-Host': 'tasty.p.rapidapi.com'
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

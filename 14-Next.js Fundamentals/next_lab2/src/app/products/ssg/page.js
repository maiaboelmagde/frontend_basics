import React from 'react';
import RecipeCard from '../../../components/RecipeCard';
import { Spinner } from 'react-bootstrap';

const Page = async() => {

    let myRecepies = null;
 
    let res = await fetch(process.env.NEXT_PUBLIC_API_LINK, {
        cache:"force-cache",
        headers: {
            'X-Rapidapi-Key': process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY,
            'X-Rapidapi-Host': process.env.NEXT_PUBLIC_X_RAPIDAPI_HOST
        }
    });
  
    let data = await res.json();
    myRecepies = data.results;
    console.log(myRecepies);
    return myRecepies!==null ? (
        <div className="d-flex flex-wrap g-5 justify-content-center">
        {myRecepies.map((r) => (
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

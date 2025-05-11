'use client'
import { useParams } from 'next/navigation';
import React from 'react';

const Page = () => {
  const { inputs } = useParams();

  return (
    <div className="container py-5">
      <h1 className="mb-4">You Entered:</h1>
      <ul className="list-group">
        {inputs.map((word, index) => (
          <li key={index} className="list-group-item">
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;

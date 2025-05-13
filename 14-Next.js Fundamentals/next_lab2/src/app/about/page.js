import React from 'react';
import aboutData from '../../data/about.json';
export const metadata = {
  title: 'About Us',
};

const Page = () => {
  const { mission, team } = aboutData;

  return (
    <div className="container py-5">
      <h1 className="mb-4">About Us</h1>
      <p className="lead">
        Welcome to our website! This project is built with Next.js using the App Router and styled with Bootstrap classes.
      </p>

      <div className="row mt-5">
        <div className="col-md-6">
          <h4>Our Mission</h4>
          <p>{mission}</p>
        </div>
        <div className="col-md-6">
          <h4>Our Team</h4>
          <p>{team}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;

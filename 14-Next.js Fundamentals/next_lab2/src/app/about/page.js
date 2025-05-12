'use client';

import React from 'react';

const Page = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4">About Us</h1>
      <p className="lead">
        Welcome to our website! This project is built with Next.js using the App Router and styled with Bootstrap classes. It demonstrates simple page routing, layout structure, and reusable components.
      </p>

      <div className="row mt-5">
        <div className="col-md-6">
          <h4>Our Mission</h4>
          <p>
            We aim to build modern, scalable web applications using the latest technologies while keeping things simple and beginner-friendly.
          </p>
        </div>
        <div className="col-md-6">
          <h4>Our Team</h4>
          <p>
            We're a passionate group of developers who enjoy building, learning, and sharing knowledge through real-world projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;

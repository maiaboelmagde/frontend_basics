'use client'

import { useParams } from "next/navigation";

export default function Page() {
    const {id}=useParams();
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
      <div className="text-center">
        <h1 className="display-4">You entered a single input ....</h1>
        <p className="lead">{id}</p>
        <a href="/nested" className="btn btn-primary mt-3">Go Back</a>
      </div>
    </div>
  );
}

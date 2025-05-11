'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const parts = input
      .split(' ')
      .map(part => part.trim())
      .filter(part => part !== '');
    if (parts.length > 0) {
      const path = '/nested/' + parts.join('/');
      router.push(path);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Enter Words</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Type words separated by space"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Show Words</button>
      </form>
    </div>
  );
};

export default Page;

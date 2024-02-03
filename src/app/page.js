import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link href="/">
          Home
        </Link>
        <Link href="/login">
          Login
        </Link>
      </nav>
    </div>
  );
};

export default HomePage;
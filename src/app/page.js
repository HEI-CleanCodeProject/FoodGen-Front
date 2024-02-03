import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <nav className='_NavLink' >
        <Link href="/">
          Home
        </Link>
        <Link href="/login">
          Login
        </Link>
        <Link href="/register">
          Register
        </Link>
      </nav>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
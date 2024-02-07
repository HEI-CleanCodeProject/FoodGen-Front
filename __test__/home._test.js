import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../src/app/page';

describe('HomePage', () => {
  test('renders navigation links correctly', () => {
    render(<HomePage />);

    const homeLink = screen.getByRole('link', { name: 'Home' });
    const loginLink = screen.getByRole('link', { name: 'Login' });
    const registerLink = screen.getByRole('link', { name: 'Register' });

    expect(homeLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
    expect(registerLink).toBeInTheDocument();
  });
});
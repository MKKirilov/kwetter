import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('Home component renders without errors', () => {
  render(<Home />);
  expect(screen.getByText('Home timeline')).toBeInTheDocument();
});
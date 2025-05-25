import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

test('renders initial count as 0', () => {
  render(<Counter />);
  expect(screen.getByTestId('count')).toHaveTextContent('0');
});

test('increments the count when "Increase" button is clicked', () => {
  render(<Counter />);
  fireEvent.click(screen.getByTestId('increase'));
  expect(screen.getByTestId('count')).toHaveTextContent('1');
});

test('decrements the count when "Decrease" button is clicked', () => {
  render(<Counter />);
  fireEvent.click(screen.getByTestId('decrease'));
  expect(screen.getByTestId('count')).toHaveTextContent('-1');
});

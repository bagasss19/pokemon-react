import { render} from '@testing-library/react';
import App from './App'
import React from 'react'

test('renders learn react link', () => {
  const {getByText} = render(<App />);
  const linkElement = getByText(/Pokemon/i);
  expect(linkElement).toBeInTheDocument();
});

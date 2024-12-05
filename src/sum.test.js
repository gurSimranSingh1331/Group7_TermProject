// Example of the updated App.test.js

import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react';  // Updated to use the new 'act' from react

test('renders team member names', () => {
  render(<App />);
  const teamMember = screen.getByText(/Gursimran Singh/i);  // Correct text that exists in the App component
  expect(teamMember).toBeInTheDocument();
});

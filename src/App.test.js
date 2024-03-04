import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

describe('App',()=>{

  test('renders navigation links', ()=>{
    render(
    <Router>
       <App/>
    </Router>)
expect(screen.getByText(/view profile/i)).toBeInTheDocument()
expect(screen.getByText(/to-do-list/i)).toBeInTheDocument()
expect(screen.getByText(/weather/i)).toBeInTheDocument()

  })
  userEvent.click(screen.getByText(/view profile/i));
  expect(screen.getByText(/user profile/i)).toBeInTheDocument()
})
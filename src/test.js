import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './Home';


test('renders Dashboards title', () => {
    render(<Home />);
    const titleElement = screen.getByText(/Dashboard/);
    expect(titleElement).toBeInTheDocument();
  });
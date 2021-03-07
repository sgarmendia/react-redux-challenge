import React from 'react';
import { render, cleanup } from '@testing-library/react';
// import '@testing-library/jest-dom';

import App from './App';

afterEach(cleanup);

describe('App', () => {
  const { getByTestId } = render(<App />);

  it('renders the title', () => {
    const title = getByTestId('title');
    expect(title).toHaveTextContent('Parcel React boilerplate');
  });
});
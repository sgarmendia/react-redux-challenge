import React from 'react';
import { render, cleanup } from '@testing-library/react';

import App from './App';

afterEach(cleanup);

describe('App', () => {
  const { getByRole } = render(<App />);

  it('renders the title', () => {
    const title = getByRole('heading');
    expect(title).toHaveTextContent('Parcel React boilerplate');
  });
});
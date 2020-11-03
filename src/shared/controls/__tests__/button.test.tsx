import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Button from '../button';

afterEach(cleanup);

describe('<Button />', () => {
  it('renders correctly', () => {
    const { container } = render(<Button>Click me</Button>);
    expect(container).toMatchSnapshot();
  });
});

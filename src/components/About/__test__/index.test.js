import React from 'react';
// this creates a test version of the DOM
import { render, cleanup } from '@testing-library/react';
// offers custom matchers for DOM testing
import '@testing-library/jest-dom/extend-expect';
// imports teh component that we are testing
import About from '..';


// jest utility function ti keep things clean
afterEach(cleanup);

// test function with description as string
describe('About component', () => {
    const { asFragment } = render(<About />);
    // First Test
    // 'it' can be used interchangeably with 'test'
    it('renders', () => {
        render(<About />);
      });

    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
        // returns a snapshot of the About component
        expect(asFragment()).toMatchSnapshot();
      });

})
  

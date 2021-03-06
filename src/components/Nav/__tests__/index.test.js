import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';
afterEach(cleanup);

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
  ]
  const mockCurrentCategory = jest.fn();
  const mockSetCurrentCategory = jest.fn();

// test function
describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
    });
    it('renders', () => {
        render(<Nav
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
        />);
      })

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

// testing emoji visibility
describe('emoji is visible', () => {

    it('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav />);
        // Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})

// test to see if links are visible
describe('links are visible', () => {
    it('inserts text into the links', () => {
        // Arrange
        //   gets element by its test id
        const { getByTestId } = render(<Nav />);
        // Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})
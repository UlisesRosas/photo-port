import React from 'react';
// this will handle our photos and it will be a child component to this component
import PhotoList from '../PhotoList';
// importing helper file
import { capitalizeFirstLetter } from '../../utils/helpers';



// 'props' passes data foe objects that are used in component
function Gallery ({ currentCategory }) {
    // name and description is being passed from our currentCategory object
    const { name, description } = currentCategory;
      return (
        <section>
        <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
        <p>{description}</p>
        {/* we nested the PhotoList component inside of this component and it will handle the images */}
        <PhotoList  />
      </section>
      );
}

export default Gallery;
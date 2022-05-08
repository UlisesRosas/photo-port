import React from 'react';
// importing helper file
import { capitalizeFirstLetter } from '../../utils/helpers';
// this imports our images
import photo from "../../assets/small/commercial/0.jpg";


// 'props' passes data foe objects that are used in component
function Gallery (props) {
    // categories are being held as objects to assign multiple properties
    // such as the name and description
    const currentCategory = {
        name: "commercial",
        description:
          "Photos of grocery stores, food trucks, and other commercial projects",
      };
      return (
        <section>
            {/* helper is being added to the name comming from object */}
          <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
          <p>{currentCategory.name}</p>
          <div className="flex-row">
          {/* the image path is atached to this variable */}
          <img
            src={photo}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
      </div>
        </section>
      );
}

export default Gallery;
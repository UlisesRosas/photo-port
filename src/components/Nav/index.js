// ** broken comented version

// import React, { useState } from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

// function Nav() {
//   // defined all the categories in the array to then map the array of objects
//   const categories = useState([
//     {
//       name: "commercial",
//       description:
//         "Photos of grocery stores, food trucks, and other commercial projects",
//     },
//     { name: "portraits", description: "Portraits of people in my life" },
//     { name: "food", description: "Delicious delicacies" },
//     {
//       name: "landscape",
//       description: "Fields, farmhouses, waterfalls, and the beauty of nature",
//     },
//   ]);

//   const [currentCategory, setCurrentCategory] = useState(categories[0]);

//   //this function will return the selected category 
//   // function categorySelected(name) {
//   //   console.log(`${name} clicked`)
//   // }

//   return (
//     <header>
//       <h2>
//         {/* 'data-test-id' is this tag gets targeted for testing */}
//         <a data-testid="link" href="/">
//           <span role="img" aria-label="camera"> 📸</span> Oh Snap!
//         </a>
//       </h2>
//       <nav>
//         <ul className="flex-row">
//           <li className="mx-2">
//             <a data-testid="about" href="#about">
//               About me
//             </a>
//           </li>
//           <li>
//             <span>Contact</span>
//           </li>
//           {/* this creates an li with a span for each of the categories by mapping through the arrayof objects defined above */}
//           {/* NOTE: you will need thid part for the homework challenge */}
//           {categories.map((category) => (
//             <li
//               className={`mx-1 ${
//                 // "navActive makes the nave color change depending on wha category is selected"
//                 currentCategory.name === category.name && 'navActive'
//                 // there needs to be a key in the outer most tag of a map call back. The key must be unique  
//                 // this key works like a foreign key however it lets react keep track of items in the DOM
//                 // you canonly have one  parent element similar to a component
//                 }`} key={category.name}>
//               {/* built in event listener like the kind in regular JS. This will call the function defined above */}
//               <span onClick={() => { setCurrentCategory(category) }}>
//               {capitalizeFirstLetter(category.name)}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Nav;


// This Hook keeps trac of the components life cycle methods
import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


// props let us pass any Jsx tag propertis and it will have the value of the prop
function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

  // will change the labe of the tab
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          {/* this conditional statement makes the class name change.
          this comes in the form of a short circuit conditional statement */}
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
            // this short circuit conditional is chaned and it makes the 'navActive' class assigned only to the 
            //  current category
              className={`mx-1 ${currentCategory.name === category.name && !contactSelected && `navActive`
                }`}
              key={category.name}
            >
              <span onClick={() => {
                setCurrentCategory(category);
                setContactSelected(false);
              }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
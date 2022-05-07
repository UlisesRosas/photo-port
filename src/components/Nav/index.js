import React from 'react';

function Nav() {
    // defined all the categories in the array to then map the array of objects
    const categories = [
        {
          name: "commercial",
          description:
            "Photos of grocery stores, food trucks, and other commercial projects",
        },
        { name: "portraits", description: "Portraits of people in my life" },
        { name: "food", description: "Delicious delicacies" },
        {
          name: "landscape",
          description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
      ];
    //this function will return the selected category 
      function categorySelected(name) {
        console.log(`${name} clicked`)
      }

  return (
    <header>
        <h2>
    <a href="/">
      <span role="img" aria-label="camera"> 📸</span> Oh Snap!
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
      {/* this creates an li with a span for each of the categories by mapping through the arrayof objects defined above */}
      {/* NOTE: you will need thid part for the homework challenge */}
      {categories.map((category) => (
        <li
          className="mx-1"
        //   there needs to be a key in the outer most tag of a map call back. The key must be unique  
        // this key works like a foreign key however it lets react keep track of items in the DOM
        // you canonly have one  parent element similar to a component
          key={category.name}
        >
            {/* built in event listener like the kind in regular JS. This will call the function defined above */}
          <span onClick={() => categorySelected(category.name)}>
            {category.name}
          </span>
        </li>
      ))}
    </ul>
  </nav>
    </header>
  );
}

export default Nav;
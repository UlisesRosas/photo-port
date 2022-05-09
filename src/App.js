// this file housese all the other components

// state is a react hook that tracks changes to render parts of the component
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import './App.css';



function App() {
  // these are our categories for the nav but thet are here so that we can pass them to any other child components that need them
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  // state for the contact form is set to false to hide the contact form and shows the gallery instead
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      {/* each one of these tags that are green are our inserted components. They hold all of the component data from their respective  */}
      <Nav
      // these are properties like you would have in HTML but they can be called whatever you want
      // and hold the values of whayever is passed in. Passing it will allow the component to modify the state here in "App.js"
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {/* this equivalent to a regular if statement that triggers if 'contactSelected' evaluates to false */}
        {/* witht the '?' terinary operator both conditions will the false condition will render as well so that its always present 
        but the 'else' wont be present unless conditon is met */}
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
          // this ':' is equivalent to an 'else' statement 
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
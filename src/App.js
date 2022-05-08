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
  
  return (
    <div>
      {/* each one of these tags that are green are our inserted components. They hold all of the component data from their respective  */}
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
        <ContactForm></ContactForm>
        <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
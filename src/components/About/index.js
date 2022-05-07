import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    return (
        // we cant use 'class' like in HTML because this is JSX and class is a constructor in JavaScript
      <section className='my-5'>
        <h1 id="about">Who am I?</h1>
        {/* here insteadof a link to an image we use a variable that containsthe image path */}
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      </section>
    );
  }
  
  export default About;
import React from 'react';
import './Home.css'; // Create a CSS file for styling
import home1 from '../../assets/home1.jpg'
import home2 from '../../assets/home2.jpg'
import home3 from '../../assets/home3.jpg'
import home4 from '../../assets/home4.jpg'
import {Typewriter,cursor} from "react-simple-typewriter";
// import Typewriter from "react-typewriter-effect";

function homeSection() {  

  return (
    <section className="home">
      <div className="home-content">
        <h1>Your Education Journey Starts Here</h1>
        
        {/* {text} */}
        <div className="typewriter-container">
        <span>Find </span>
        <span className='typewrite'>
          <Typewriter 
          words={['Colleges','Courses','Exams','programs']}
          loop={50000000} 
          cursor 
          cursorStyle='_'
          typespeed={50}
          deleteSpeed={50}
          delaySpeed={500}
          />
          </span>
            <span>that are Best for You</span>
        {/* <Typewriter
          options={{
            strings: [
              "Discover top MBA programs",
              "Explore college reviews",
              "Get exam updates",
            ],
            autoStart: true,
            loop: true,
          }}
        /> */}
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for courses, colleges, exams, and more" />
          <button>Search</button>
        </div>
      </div>

      <div className="image-slider">
        {/* Add your sliding images here */}
        <img src={home1} alt="Image 1" />
        <img src={home4} alt="Image 2" />
        <img src={home3} alt="Image 3" />
      </div>
    </section>
  );
}

export default homeSection;

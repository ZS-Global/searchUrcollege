import React from 'react';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-section contact">
        <h3>Contact Us</h3>
        <p>Email: info@searchurcollege.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 College Avenue, City Name</p>
      </div>

      <div className="footer-section social-media">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>

      <div className="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Colleges</a></li>
          <li><a href="#">Exams</a></li>
          <li><a href="#">Career Guidance</a></li>
        </ul>
      </div>

      <div className="footer-section legal">
        <h3>Legal Information</h3>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li>&copy; 2023 SearchUrCollege</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

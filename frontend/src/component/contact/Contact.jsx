import React, { useState } from 'react';
import {MdOutlineEmail} from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import './Contact.css'
import inbox from '../../assets/inbox.png'

function EducationForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [course, setCourse] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here.
    // For simplicity, let's just log the values for now.
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Contact:', contact);
    console.log('Preferred Course:', course);
    console.log('Preferred Location:', location);
  };

  return (
  <div className="container contact__container">
        <div className="contact__options">
          <aricle className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>samiullah0813@gmail.com</h5>
            <a href="mailto:samiullah0813@gmail.com" target="_blank" rel="noreferrer">Send a message</a>            
          </aricle>
          
          <aricle className="contact__option">
            <FaTelegramPlane className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>@MohdSamiullah</h5>
            <a href="https://t.me/MohdSamiullah" target="_blank" rel="noreferrer">Send a message</a>            
          </aricle>

          <aricle className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>whatsapp</h4>
            <h5>+917428098866</h5>
            <a href="https://web.whatsapp.com/send?phone=+917428098866" target="_blank" rel="noreferrer">Send a message</a>            
          </aricle>
        </div>

    <div className='form-container'>
      <h2>Need Experts advice and Guidance?</h2>
      <p>Ask our experts for clear and professional Guidance for all your queries</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            placeholder="Enter Contact Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">Preferred Course</label>
          <select
            id="course"
            name="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          >
            <option value="">Select Course Looking for</option>
            <option value="Course 1">Course 1</option>
            <option value="Course 2">Course 2</option>
            <option value="Course 3">Course 3</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="location">Preferred Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Preferred Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    
    <div className="contact-img">
      <img src={inbox} alt="" />
    </div>
    </div>
  );
}

export default EducationForm;

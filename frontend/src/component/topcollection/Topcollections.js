import React from 'react';
import './Topcollections.css'
import c1 from '../../assets/c2.jpg'

const CollegeCard = ({ title, imageUrl, count }) => (

  <div className="college-card">
    <div className="image">
      <img src={imageUrl} alt={title} className="collection-cover-image" />
      <div className="imgtext">
        <h3>{title}</h3>
        <button className="view-more-button">+ {count} More</button>
      </div>
    </div>
    
  </div>
);

const TopCollections = () => {
  return (
  <div className='top'>
  <h1>Top Collections</h1> 
    <div className="top-collections">  
       
      <CollegeCard
        title="Best MBA colleges in India"
        imageUrl="https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        count={115}
      />
      <CollegeCard
        title="Best BTech colleges in India"
        imageUrl="https://images.unsplash.com/photo-1610894496955-2eb9fb12d2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        count={345}
      />
      <CollegeCard
        title="Best B.Sc colleges in Pune"
        imageUrl="https://images.unsplash.com/photo-1599569679833-c2f9c72df78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        count={555}
      />
      <CollegeCard
        title="Best MCA colleges in Bangalore"
        imageUrl="https://images.unsplash.com/photo-1622397333309-3056849bc70b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        count={335}
      />
      <CollegeCard
        title="Best M.Tech colleges in Bangalore"
        imageUrl="https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        count={545}
      />
      <CollegeCard
        title="Best Political Science colleges in Chennai"
        imageUrl="https://images.unsplash.com/photo-1629348879298-d8fd280d8ee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        count={675}
      />
      <CollegeCard
        title="Best Dental colleges in Pune"
        imageUrl="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxjb2xsZWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        count={5556}
      />
      <CollegeCard
        title="Best Pshycology colleges in Mumba"
        imageUrl="https://images.unsplash.com/photo-1592066575517-58df903152f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxjb2xsZWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        count={598}
      />
      <CollegeCard
        title="Best Law colleges in Pune"
        imageUrl="https://images.unsplash.com/photo-1569447891824-7a1758aa73a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxjb2xsZWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        count={5556}
      />
      <CollegeCard
        title="Best Medical colleges in Mumba"
        imageUrl="https://images.unsplash.com/photo-1570385443797-7fed21c50f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgzfHxjb2xsZWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        count={598}
      />
      {/* Add more CollegeCard components for other categories */}
    </div>
    </div>
   
  );
};

export default TopCollections;

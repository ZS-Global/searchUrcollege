import React from 'react';
import './Quick_link.css'
import {FaUniversity} from 'react-icons/fa';

const QuickLinks = () => {
  const categories = [
    {
      icon : <FaUniversity/>,
      title: 'MBA',
      subcategories: ['Top MBA Colleges', 'Executive MBA Colleges', 'MBA Exams', 'MBA College Predictors'],
    },
    {
      icon : <FaUniversity/>,
      title: 'Engineering',
      subcategories: ['Top Engineering Colleges', 'Engineering Exams', 'Engineering College Predictors'],
    },
    {
      icon : <FaUniversity/>,
      title: 'Medicine',
      subcategories: ['Top Medical Colleges', 'Medical Exams','Medical Colleges','Medical Exams'],
    },
    {
      icon : <FaUniversity/>,
      title: 'Other Courses',
      subcategories: [
        'Animation',
        'B.Com',
        'B.Sc',
        'BBA',   
       ],
    },
    {
      icon : <FaUniversity/>,
      title: 'Sarkari Exams',
      subcategories: [
        'RRB Group D',
        'RRB NTPC',
        'CTET',
        'UPTET',
        'UGC NET',
      
      ],
    },
    {
      icon : <FaUniversity/>,
        title: 'MBA',
        subcategories: ['Top MBA Colleges', 'Executive MBA Colleges', 'MBA Exams', 'MBA College Predictors'],
      },
      {
        icon : <FaUniversity/>,
        title: 'Engineering',
        subcategories: ['Top Engineering Colleges', 'Engineering Exams', 'Engineering College Predictors'],
      },
      {
        icon : <FaUniversity/>,
        title: 'Medicine',
        subcategories: ['Top Medical Colleges', 'Medical Exams','Medical Colleges','Medical Exams'],
      },      
      {
        icon : <FaUniversity/>,
        title: 'Engineering',
        subcategories: ['Top Engineering Colleges', 'Engineering Exams', 'Engineering College Predictors'],
      },
      {
        icon : <FaUniversity/>,
        title: 'Medicine',
        subcategories: ['Top Medical Colleges', 'Medical Exams','Medical Colleges','Medical Exams'],
      },
      
  ];

  return (
    <div className="quick-links">
    {categories.map((category, index) => (
      <div key={index} className="category">
        <h2>{category.title}</h2>
        <ul>
          {category.subcategories.map((subcategory, subIndex) => (
            <li key={subIndex}>
              <a href={`#${subcategory.toLowerCase().replace(/\s+/g, '-')}`}>{subcategory}</a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  );
};

export default QuickLinks;

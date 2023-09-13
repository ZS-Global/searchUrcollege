import React from 'react';
import './Trendingcolleges.css'

const TrendingColleges = () => {
  const collegeNames = [
    'DU',
    'Amity University Noida',
    'IIT Bombay',
    'Christ University Bangalore',
    'Galgotias University',
    'SRM Institute of Science and Technology',
    'FMS Delhi',
    'Jamia Millia Islamia',
    'BITS Pilani',
    'Parul University',
    'BHU',
    'VIT Vellore',
    'Chandigarh University',
    'Jadavpur University',
    'LPU',
    'IGNOU',
    'IPU',
    'DTU',
    'IIT Delhi',
    'Calcutta University',
    'MIT Pune',
    'JNU',
    'IIT Madras',
    'Lucknow University',
    'Allahabad University',
    'IIM Ahmedabad',
    'Osmania University',
    'TISS Mumbai',
    'Mumbai University',
    'NMIMS Mumbai',
  ];

  return (
    <div className="trending-colleges">
      <h2>Trending Colleges & Universities</h2>
      <ul className="college-list">
        {collegeNames.map((collegeName, index) => (
          <li key={index}>{collegeName}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingColleges;

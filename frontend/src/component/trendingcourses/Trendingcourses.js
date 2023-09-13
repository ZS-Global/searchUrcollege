import React from 'react';
import './Trendingcourses.css'

const TrendingCourses = () => {
  const courseNames = [
    'After 12th - Science',
    'After 12th - Arts',
    'After 12th - Commerce',
    'MBA (Masters of Business Administration)',
    'B Tech (Bachelor of Technology)',
    'B.Sc Nursing',
    'MSW (Master of Social Work)',
    'B.A (Bachelor of Arts)',
    'Company Secretary',
    'Electronics & Communication Engineering',
    'BBA (Bachelor of Business Administration)',
    'Pharm D Doctor of Pharmacy',
    'BCA (Bachelor of Computer Applications)',
    'B.Ed',
    'Computer Science Engineering',
    'LL.B.',
    'M.A. (Master of Arts)',
    'MBBS',
    'D.El.Ed (Diploma in Elementary Education)',
    'MCA (Master of Computer Applications)',
    'B.Sc. IT (Information Technology)',
    'B.Voc (Bachelor of Vocational Education)',
    'Mechanical Engineering',
    'B.Com',
    'Nursery Teacher Training (NTT)',
  ];

  return (
    <div className="trending-courses">
      <h2>Trending Courses</h2>
      <ul className="course-list">
        {courseNames.map((courseName, index) => (
          <li key={index}>{courseName}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCourses;

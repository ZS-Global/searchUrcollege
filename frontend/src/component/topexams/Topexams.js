import React from 'react';
import './Topexams.css'

const TopExams = () => {
  const examNames = [
    'NDA',
    'CUET',
    'CAT',
    'NEET',
    'JEE Main',
    'AIBE',
    'NIFT Entrance Exam',
    'ICAI Exam',
    'IGNOU',
    'NIMCET',
    'PTET',
    'AIIMS Nursing',
    'JMI Entrance Exam',
    'NATA',
    'NCHMCT JEE',
    'CUET-PG',
    'CFA Exam',
    'CUCET Chandigarh University',
    'SSAT',
    'UGC NET',
    'APICET',
    'NEET PG',
    'GATE',
    'CLAT',
    'NID Entrance Exam',
    'ICSI Exam',
    'SAT India',
    'Karnataka PGCET',
    'NTA',
    'PGIMER Nursing',
  ];

  return (
    <div className="top-exams">
      <h2>Top Exams this month</h2>
      <ul className="exam-list">
        {examNames.map((examName, index) => (
          <li key={index}>{examName}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopExams;

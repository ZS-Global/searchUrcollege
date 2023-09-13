import React from 'react';
import './Topboards.css'

const TopBoards = () => {
  const boardNames = [
    'Maharashtra HSC',
    'CBSE 12th',
    'CBSE 10th',
    'Karnataka 2nd PUC',
    'Maharashtra SSC',
    'NTSE',
    'MPBSE 12th',
    'NIOS 12th',
    'PSEB 12th',
    'NIOS 10th',
  ];

  return (
    <div className="top-boards">
      <h2>Top Boards in India</h2>
      <ul className="board-list">
        {boardNames.map((boardName) => (
          <li key={boardName.toLowerCase().replace(/ /g, '-') + '-button'}>
            {boardName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopBoards;

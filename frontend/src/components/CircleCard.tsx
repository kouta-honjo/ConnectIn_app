import React from 'react';

const CircleCard = () => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', borderRadius: '8px' }}>
      <h3>Circle Name</h3>
      <p>This is a brief description of the circle.</p>
      <button>Bookmark</button>
    </div>
  );
};

export default CircleCard;

import React from 'react';

const Score: React.FC = ({ children }) => {
  return (
    <div>
      <p>Computer: 0</p>
      {children}
      <p>You: 0</p>
    </div>
  );
};

export default Score;

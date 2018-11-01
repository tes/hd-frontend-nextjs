import React from 'react';

export const Button = ({ bgColor, children }) => (
  <div
    style={{
      display: 'inline-block',
      padding: '15px 20px',
      backgroundColor: bgColor,
      borderRadius: 5,
      color: '#fff',
      margin: 10
    }}
  >
    {children}
  </div>
);

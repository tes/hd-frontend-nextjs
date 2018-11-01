import React from 'react';

export const Button = ({ bgColor, children }) => (
  <div
    style={{
      display: 'inline-block',
      padding: 20,
      backgroundColor: bgColor,
      borderRadius: 5,
    }}
  >
    {children}
  </div>
);

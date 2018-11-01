import React from 'react';

export const Button = ({ bgColor, children }) => (
  <div style={{ padding: 20, backgroundColor: bgColor }}>
    {children}
  </div>
);

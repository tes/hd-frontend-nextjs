import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ Link }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 20,
      margin: 0,
      flex: 1,
      backgroundColor: '#2b3547',
      color: '#fff',
      marginBottom: 20
    }}
  >
    <div style={{ padding: '0 20px'}}>
      <Link href="/">
        <a style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
      </Link>
    </div>
    <div style={{ padding: '0 20px'}}>
      <Link href="/blog">
        <a style={{ color: '#fff', textDecoration: 'none' }}>Blog</a>
      </Link>
    </div>
    <div style={{ padding: '0 20px'}}>
      <Link href="/users">
        <a style={{ color: '#fff', textDecoration: 'none' }}>Users</a>
      </Link>
    </div>
  </div>
);

Header.propTypes = {
  Link: PropTypes.func.isRequired,
}
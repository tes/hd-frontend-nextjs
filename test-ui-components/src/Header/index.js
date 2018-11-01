import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ Link }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 20,
      flex: 1,
    }}
  >
    <div style={{
      padding: '0 20px',
    }}><Link href="/" to="/">Home</Link></div>
    <div style={{
      padding: '0 20px',
    }}><Link href="/blog" to="/blog">Blog</Link></div>
    <div style={{
      padding: '0 20px',
    }}><Link href="/users" to="/users">Users</Link></div>
  </div>
);

Header.propTypes = {
  Link: PropTypes.node.isRequired,
}
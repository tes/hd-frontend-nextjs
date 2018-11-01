import React from 'react';
import Link from 'next/link';
import { Button, Header } from 'test-ui-components';

export default () => (
  <div style={{ margin: '0 auto', maxWidth: 900 }}>
    <h1>This is the users page</h1>
    <Button bgColor="green">
      <span style={{ color: '#fff' }}>Test Button</span>
    </Button>
  </div>
);

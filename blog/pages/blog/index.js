import React from 'react';
import Link from 'next/link';
import { Button, Header } from 'test-ui-components';

export default () => (
  <div>
    <Header Link={Link} />
    <Button bgColor="green">
      Test
    </Button>
  </div>
);
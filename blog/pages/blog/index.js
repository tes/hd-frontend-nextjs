import React from 'react';
import Link from 'next/link';
import { Button } from 'test-ui-components';

export default () => (
  <div style={{ margin: '0 auto', maxWidth: 900 }}>
    <h1>This is the blog</h1>
      <Button bgColor="green">
        <Link href="/blog/post1">
          <a>Read Post1</a>
        </Link>
      </Button>
      <Button bgColor="red">
        <Link href="/blog/post2">
          <a>Read Post2</a>
        </Link>
      </Button>
  </div>
);

import React from 'react';
import Link from 'next/link';
import { Button, Header } from 'test-ui-components';

export default () => (
  <div style={{ margin: '0 auto', maxWidth: 900 }}>
    <h1>This is the blog</h1>
    <Link href="/blog/post1">
      <a><Button bgColor="green">
        Read Post1
      </Button></a>
    </Link>
    <Link href="/blog/post2">
      <a><Button bgColor="green">
        Read Post2
      </Button></a>
    </Link>
  </div>
);

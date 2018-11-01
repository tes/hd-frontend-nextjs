import React from 'react'
import App, { Container } from 'next/app'
import Link from 'next/link';
import { Header } from 'test-ui-components';

class Layout extends React.Component {
  render () {
    const {children} = this.props
    return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'Helvetica' }}>
        <Header Link={Link} />
        {children}
    </div>
    )
  }
}

export default class MyApp extends App {
  render () {
    const {Component, pageProps} = this.props
    return <Container>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Container>
  }
}

import React, { Component } from 'react'
import Header from '../common/components/layout/Header'
import Routes from './Routes'
import Footer from '../common/components/layout/Footer'
import ScrollFix from '../common/components/meta/ScrollFix'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <ScrollFix >
          <Routes />
        </ScrollFix>
        <Footer />
      </div>
    )
  }
}

export default App

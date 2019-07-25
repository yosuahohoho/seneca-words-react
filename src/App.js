import React from 'react'

import Header from './components/Header'
import QuoteContainer from './components/quote/QuoteContainer'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <QuoteContainer />
      <Footer />
    </div>
  )
}

export default App

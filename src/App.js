import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Quote from './components/Quote';
import Toolbar from './components/Toolbar';
import Footer from './components/Footer';

const App = () => {

  const [data, setData] = useState({})
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    fetchQuote()
  }, [])

  const handleClick = () => {
    setLoaded(false)
    fetchQuote()
  }

  // fetch random quote from api
  const fetchQuote = () => {
    fetch('https://seneca-words.glitch.me/api/quotes')
      .then(response => response.json())
      .then(data => {
        setData(data)
        setLoaded(true)
      })
      .catch(error => console.error('Error: ', error))
  }

  return (
    <div className="container">
      <Header />
      <Quote quote={data} isLoaded={isLoaded} />
      <Toolbar quote={data} handleClick={handleClick} />
      <Footer />
    </div>
  );
}

export default App;
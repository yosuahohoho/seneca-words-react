import React from 'react';

import Header from './components/Header';
import Quote from './components/Quote';
import Toolbar from './components/Toolbar';
import Footer from './components/Footer';

import useFetchData from './utils/useFetchData';

const App = () => {
  
  // useFetchData custom hook
  const [{ data, isLoading, isError }, fetchQuote] = useFetchData('https://seneca-words.glitch.me/api/quotes')

  return (
    <div className="container">
      <Header />
      <Quote quote={data} isLoading={isLoading} isError={isError}/>
      <Toolbar quote={data} handleClick={fetchQuote} />
      <Footer />
    </div>
  );
}

export default App;
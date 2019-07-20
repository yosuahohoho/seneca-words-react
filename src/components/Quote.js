import React from 'react';
import { CSSTransition } from 'react-transition-group';


const Quote = ({ quote, isLoaded }) => {
  return (
    <section className="quote">
      <CSSTransition
        in={ isLoaded }
        timeout={350}
        classNames="quote"
        unmountOnExit
      >
        <section>
          <p className="quote__text">{ quote.message }</p>
          <p className="quote__author">- { quote.author }</p>
        </section>
      </CSSTransition>
    </section>
  )
}

export default Quote;
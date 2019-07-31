import React from 'react'
import { CSSTransition } from 'react-transition-group'

const QuoteContent = ({ quote, isLoading, isError }) => {
  return (
    <section className='quote'>
      <CSSTransition
        in={!isLoading}
        timeout={350}
        classNames='quote__animation'
        unmountOnExit>
        <section>
          <p className='quote__text'>{quote.message}</p>
          <p className='quote__author'>- {quote.author}</p>
        </section>
      </CSSTransition>
    </section>
  )
}

export default QuoteContent

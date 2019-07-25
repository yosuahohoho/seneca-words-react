import React from 'react'
import { CSSTransition } from 'react-transition-group'

const QuoteContent = ({ quote, isLoading, isError }) => {
  return (
    <section className='quote__content'>
      <CSSTransition
        in={!isLoading}
        timeout={350}
        classNames='quote--animation'
        unmountOnExit>
        <section>
          <p className='quote--text'>{quote.message}</p>
          <p className='quote--author'>- {quote.author}</p>
        </section>
      </CSSTransition>
    </section>
  )
}

export default QuoteContent

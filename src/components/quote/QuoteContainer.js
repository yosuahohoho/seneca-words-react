import React, { Fragment } from 'react'

import QuoteContent from './QuoteContent'
import QuoteToolbar from './QuoteToolbar'

import useFetchData from '../../utils/useFetchData'

const QuoteContainer = () => {
  // get app state using custom hook
  const [{ data, isLoading, isError }, fetchQuote] = useFetchData(
    'https://seneca-words.glitch.me/api/quotes'
  )
  return (
    <Fragment>
      <QuoteContent quote={data} isLoading={isLoading} isError={isError} />
      <QuoteToolbar quote={data} handleClick={fetchQuote} />
    </Fragment>
  )
}

export default QuoteContainer

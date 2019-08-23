import React from 'react'

import { faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const QuoteToolbar = ({ quote, handleClick }) => {
  const twitterHref = `https://twitter.com/intent/tweet?hashtags=stoics&related=quotes&text=${
    quote.message
  } - ${quote.author}`
  const whatsAppHref = `whatsapp://send?text=${quote.message} - ${quote.author}`

  return (
    <section className='quote__toolbar'>
      <div className="quote__share__links">
        <a
          href={twitterHref}
          title='tweet it!'
          target='_blank'
          rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faTwitter}/>
        </a>
        <a
          href={whatsAppHref}
          title='Share to whatsapp!'
          target='_blank'
          rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faWhatsapp}/>
        </a>
      </div>
      <button onClick={handleClick}>
        Get Quote
      </button>
    </section>
  )
}

export default QuoteToolbar

import React from 'react';
import QuoteContent from './QuoteContent';

const Quote = (props) => {
    return (
        <section className="quote">
            <QuoteContent quote={props.quote} loaded={props.loaded} />
        </section>
    )
}

export default Quote;
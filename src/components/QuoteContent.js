import React from 'react';



const QuoteContent = (props) => {
    return (
        <section>
            <p className="quote__text">{props.quote.message}</p>
            <p className="quote__author">- {props.quote.author}</p>
        </section>

    )
}

export default QuoteContent;
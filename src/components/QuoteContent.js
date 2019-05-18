import React from 'react';
import {CSSTransition} from 'react-transition-group'


const QuoteContent = (props) => {
    return (
        <CSSTransition
          in={props.loaded}
          timeout={350}
          classNames="quote"
          unmountOnExit 
        >
            <section>
                <p className="quote__text">{props.quote.message}</p>
                <p className="quote__author">- {props.quote.author}</p>
            </section>
        </CSSTransition>

    )
}

export default QuoteContent;
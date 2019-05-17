import React from 'react';
import posed, { PoseGroup } from 'react-pose';

const QuotePose = posed.div({
    enter: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
})

const QuoteContent = (props) => {
    return (
        <PoseGroup>
            {props.loaded && [
                <QuotePose key="quote">
                    <p className="quote__text">{props.quote.message}</p>
                    <p className="quote__author">- {props.quote.author}</p>
                </QuotePose>
            ]}
        </PoseGroup>
    )
}

export default QuoteContent;
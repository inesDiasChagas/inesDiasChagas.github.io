import classNames from "classnames";

import { QuoteType } from "../../utils/types";

import "./QuoteContainer.css";

function QuoteContainer({ quotes }) {
  const handleQuoteClass = (quote) =>
    classNames("quote", {
      "variable-highligth": quote.variants?.includes(QuoteType.HIGHLIGHT),
      "variable-bold": quote.variants?.includes(QuoteType.BOLD),
    });
  return (
    <div className='container'>
      {quotes && (
        <div className='quotes-container'>
          {quotes.map((quote, index) => {
            return (
              <span key={index} className={handleQuoteClass(quote)}>
                {quote.quote}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default QuoteContainer;

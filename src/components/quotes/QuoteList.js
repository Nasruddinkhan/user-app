import { Fragment } from "react";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  const quotes = props.quotes.map((quote) => (
    <QuoteItem
      key={quote.id}
      id={quote.id}
      author={quote.author}
      text={quote.text}
    />
  ));
  return (
    <Fragment>
      <ul className={classes.list}>{quotes}</ul>
    </Fragment>
  );
};

export default QuoteList;

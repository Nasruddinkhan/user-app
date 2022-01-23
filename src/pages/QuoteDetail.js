import { Fragment } from "react";
import { useParams, Route, Routes } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];
const QuoteDetail = () => {
const params = useParams();

const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

if (!quote) {
  return <p>No quote found!</p>;
}
  return (
    <Fragment>
      {/* <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p> */}
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Routes>
        <Route
          path={`/quotes/${params.quoteId}/comments`}
          element={<Comments />}
        />
      </Routes>
    </Fragment>
  );
};

export default QuoteDetail;

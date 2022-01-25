import { Fragment } from "react";
import { useParams, Route, Routes, Link } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];
const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  console.log();
  if (!quote) {
    return <p>No quote found!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />

      <div className="centered">
        <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
          Load Comments
        </Link>
      </div>
      <Routes>
        <Route
          path="comments"
          element={<Comments />}
        />
      </Routes>
    </Fragment>
  );
};

export default QuoteDetail;

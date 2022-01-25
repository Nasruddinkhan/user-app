import QuoteForm from "../components/quotes/QuoteForm";
import { useNavigate } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";
import { addQuote } from "../lib/api";
const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(status);
    if (status === "completed") {
      navigate("/quotes");
    }
  }, [status, navigate]);
  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
    navigate("/quotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
